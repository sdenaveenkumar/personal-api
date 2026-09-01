export function notFoundHandler(req, res, next) {
  res.status(404).json({
    success: false,
    status: 404,
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.originalUrl}`,
    hint: 'Visit /api/v1 for the list of available endpoints or / for interactive documentation.'
  });
}

export function errorHandler(err, req, res, next) {
  console.error('[Error]', err);

  const statusCode = err.status || err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    error: err.name || 'Internal Server Error',
    message: err.message || 'An unexpected error occurred',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
}
