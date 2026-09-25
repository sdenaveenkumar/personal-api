import { config } from '../config/config.js';

const requestCounts = new Map();
const contactCounts = new Map();

// Periodic cleanup of expired rate limit windows
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of requestCounts.entries()) {
    if (now - record.startTime > config.rateLimit.windowMs) {
      requestCounts.delete(ip);
    }
  }
  for (const [ip, record] of contactCounts.entries()) {
    if (now - record.startTime > 15 * 60 * 1000) {
      contactCounts.delete(ip);
    }
  }
}, config.rateLimit.windowMs);

// Allow process to terminate naturally without hanging on this timer
if (cleanupInterval.unref) {
  cleanupInterval.unref();
}

/**
 * Global API Rate Limiter
 * Enforces per-IP request thresholds across all endpoints.
 */
export function rateLimiter(req, res, next) {
  // Skip rate limiting for static assets
  if (req.path.startsWith('/public') || req.path === '/favicon.ico' || req.path.endsWith('.css') || req.path.endsWith('.js')) {
    return next();
  }

  const ip = req.ip || req.connection.remoteAddress || 'unknown-client';
  const now = Date.now();
  const windowMs = config.rateLimit.windowMs;
  const maxRequests = config.rateLimit.max;

  let clientRecord = requestCounts.get(ip);

  if (!clientRecord || now - clientRecord.startTime > windowMs) {
    clientRecord = {
      startTime: now,
      count: 1
    };
    requestCounts.set(ip, clientRecord);
  } else {
    clientRecord.count += 1;
  }

  const remaining = Math.max(0, maxRequests - clientRecord.count);
  const resetTime = new Date(clientRecord.startTime + windowMs).toISOString();

  res.setHeader('RateLimit-Limit', maxRequests);
  res.setHeader('RateLimit-Remaining', remaining);
  res.setHeader('RateLimit-Reset', resetTime);

  if (clientRecord.count > maxRequests) {
    return res.status(429).json({
      success: false,
      status: 429,
      error: 'Too Many Requests',
      message: `Rate limit of ${maxRequests} requests per ${windowMs / 1000}s exceeded. Try again later.`,
      resetAt: resetTime
    });
  }

  next();
}

/**
 * Specialized Contact Submission Rate Limiter
 * Prevents automated spambots from flooding the contact inbox (5 submissions per 15 min).
 */
export function contactRateLimiter(req, res, next) {
  if (process.env.NODE_ENV === 'test') {
    return next();
  }

  const CONTACT_WINDOW_MS = 15 * 60 * 1000;
  const CONTACT_MAX = 5;
  const ip = req.ip || req.connection.remoteAddress || 'unknown-client';
  const now = Date.now();

  let record = contactCounts.get(ip);
  if (!record || now - record.startTime > CONTACT_WINDOW_MS) {
    record = { startTime: now, count: 1 };
    contactCounts.set(ip, record);
  } else {
    record.count += 1;
  }

  const remaining = Math.max(0, CONTACT_MAX - record.count);
  const resetTime = new Date(record.startTime + CONTACT_WINDOW_MS).toISOString();

  res.setHeader('RateLimit-Contact-Limit', CONTACT_MAX);
  res.setHeader('RateLimit-Contact-Remaining', remaining);
  res.setHeader('RateLimit-Contact-Reset', resetTime);

  if (record.count > CONTACT_MAX) {
    return res.status(429).json({
      success: false,
      status: 429,
      error: 'Too Many Requests',
      message: 'Contact form rate limit exceeded. Please wait 15 minutes before sending another message.',
      resetAt: resetTime
    });
  }

  next();
}
