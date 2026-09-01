export function responseTimer(req, res, next) {
  const start = process.hrtime.bigint();
  const originalSend = res.send;

  res.send = function (body) {
    const end = process.hrtime.bigint();
    const durationMs = Number(end - start) / 1e6;
    if (!res.headersSent) {
      res.setHeader('X-Response-Time', `${durationMs.toFixed(2)}ms`);
    }
    return originalSend.call(this, body);
  };

  next();
}
