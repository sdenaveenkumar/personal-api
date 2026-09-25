import { createApp } from './app.js';
import { config } from './config/config.js';

const app = createApp();

const server = app.listen(config.port, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🚀 ${config.appName} is running!`);
  console.log(`📡 Base API:      http://localhost:${config.port}/api/v1`);
  console.log(`🌐 Web Explorer:  http://localhost:${config.port}/`);
  console.log(`📋 OpenAPI Spec:  http://localhost:${config.port}/openapi.json`);
  console.log(`❤️  Health Check:  http://localhost:${config.port}/health`);
  console.log(`======================================================\n`);
});

// Protect against Slowloris and connection starvation attacks
server.headersTimeout = 65000;
server.keepAliveTimeout = 61000;
server.requestTimeout = 30000;

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\nSIGINT signal received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

export default app;
