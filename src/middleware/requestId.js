import { randomUUID } from 'node:crypto';

/**
 * Request ID Middleware
 * Assigns or propagates a unique UUID tracking identifier (X-Request-Id)
 * to every incoming HTTP request and response for distributed tracing and observability.
 */
export function requestId(req, res, next) {
  const id = req.headers['x-request-id'] || randomUUID();
  req.id = id;
  res.setHeader('X-Request-Id', id);
  next();
}
