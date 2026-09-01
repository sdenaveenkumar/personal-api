import { config } from '../config/config.js';

const requestCounts = new Map();

// Periodic cleanup of expired rate limit windows
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of requestCounts.entries()) {
    if (now - record.startTime > config.rateLimit.windowMs) {
      requestCounts.delete(ip);
    }
  }
}, config.rateLimit.windowMs);

// Allow process to terminate naturally without hanging on this timer
if (cleanupInterval.unref) {
  cleanupInterval.unref();
}

export function rateLimiter(req, res, next) {
  // Skip rate limiting for static assets
  if (req.path.startsWith('/public') || req.path === '/favicon.ico') {
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
