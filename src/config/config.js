import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'Naveen Kumar Personal API',
  version: '1.0.0',
  baseUrl: process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`,
  rateLimit: {
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000', 10),
    max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
  },
  corsOrigin: process.env.CORS_ORIGIN || '*',
  startTime: new Date()
};
