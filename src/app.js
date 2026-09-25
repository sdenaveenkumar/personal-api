import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import apiV1Routes from './routes/index.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import { responseTimer } from './middleware/responseTimer.js';
import { requestId } from './middleware/requestId.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';
import { openApiSpec } from './data/loader.js';
import { config } from './config/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getDirectoryIndex(req) {
  const host = req.get('host') || `localhost:${config.port}`;
  const baseUrl = `${req.protocol}://${host}/api/v1`;

  return {
    success: true,
    status: 200,
    timestamp: new Date().toISOString(),
    api: config.appName,
    version: config.version,
    documentation: `${req.protocol}://${host}/docs`,
    openApiSpec: `${req.protocol}://${host}/openapi.json`,
    endpoints: {
      profile: {
        url: `${baseUrl}/profile`,
        description: "Naveen's identity, title, location, status, and summary"
      },
      bio: {
        url: `${baseUrl}/bio`,
        description: "Developer bio in short, medium, long, or markdown formats",
        params: "?format=short|medium|long|markdown"
      },
      skills: {
        url: `${baseUrl}/skills`,
        description: "Categorized technical proficiencies & stack",
        params: "?category=frontend|backend|languages|csFundamentals&featured=true"
      },
      projects: {
        url: `${baseUrl}/projects`,
        description: "Curated software engineering projects & portfolio",
        params: "?featured=true&tag=react&q=music"
      },
      singleProject: {
        url: `${baseUrl}/projects/:slug`,
        description: "Detailed information for a single project (e.g. /projects/create-naveen-react)"
      },
      academics: {
        url: `${baseUrl}/academics`,
        description: "Complete Manipal University Jaipur BCA academic ledger, marks, and CGPA record",
        subroutes: [
          `${baseUrl}/academics/summary`,
          `${baseUrl}/academics/semesters`,
          `${baseUrl}/academics/semesters/:semId`,
          `${baseUrl}/academics/courses?grade=A+&q=Java`
        ]
      },
      experience: {
        url: `${baseUrl}/experience`,
        description: "Work history, engineering roles, and achievements",
        params: "?type=full-time|contract"
      },
      education: {
        url: `${baseUrl}/education`,
        description: "Academic degrees, CS fundamentals, and certifications"
      },
      socials: {
        url: `${baseUrl}/socials`,
        description: "Connected platforms (GitHub, LinkedIn, WhatsApp, Instagram, Email)"
      },
      stats: {
        url: `${baseUrl}/stats`,
        description: "Live server uptime, Node runtime info, memory, and metrics"
      },
      philosophy: {
        url: `${baseUrl}/philosophy`,
        description: "Engineering ethos, core development principles, and favorite quotes"
      },
      hobbies: {
        url: `${baseUrl}/hobbies`,
        description: "Side passions (music engineering, creative 3D shaders, tooling)"
      },
      resume: {
        url: `${baseUrl}/resume`,
        description: "JSON Resume schema compliant developer resume"
      },
      contact: {
        url: `${baseUrl}/contact`,
        methods: ["GET", "POST"],
        description: "GET contact channels or POST a message directly to Naveen"
      }
    }
  };
}

export function createApp() {
  const app = express();

  // Hide server fingerprinting
  app.disable('x-powered-by');

  // Basic Security & Headers
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdn.jsdelivr.net"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
          imgSrc: ["'self'", "data:", "https://api.dicebear.com", "https://images.unsplash.com"],
          connectSrc: ["'self'"],
          upgradeInsecureRequests: null
        }
      },
      crossOriginEmbedderPolicy: false
    })
  );

  // Additional Security: Strict Permissions-Policy
  app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
    next();
  });

  // Enable CORS
  app.use(
    cors({
      exposedHeaders: ['X-Response-Time', 'X-Request-Id']
    })
  );

  // Request ID for distributed tracing & observability
  app.use(requestId);

  // Response Compression
  app.use(compression());

  // Logging
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  // Response latency measurement
  app.use(responseTimer);

  // JSON and URL-encoded body parsers (tightened to 100kb against payload flooding)
  app.use(express.json({ limit: '100kb' }));
  app.use(express.urlencoded({ extended: true, limit: '100kb' }));

  // Static Assets for Visual API Explorer UI (excluding auto index)
  app.use(express.static(path.join(__dirname, 'public'), { index: false }));

  // Rate Limiter
  app.use(rateLimiter);

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.json({
      status: 'healthy',
      requestId: req.id,
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  });

  // OpenAPI 3.0 specification JSON
  app.get('/openapi.json', (req, res) => {
    res.json(openApiSpec);
  });

  // Dedicated Documentation Explorer route
  app.get(['/docs', '/docs/'], (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  // Root Content Negotiation:
  // - If client prefers HTML (e.g. web browser), serve the interactive UI documentation.
  // - If client prefers JSON (e.g. curl, fetch, api clients), serve the JSON directory index.
  app.get('/', (req, res) => {
    const acceptsHtml = req.accepts(['html', 'json']) === 'html';
    // If request has explicit json header or user-agent like curl without accept header, default to json or html accordingly
    const isCurl = (req.get('user-agent') || '').toLowerCase().includes('curl');

    if (acceptsHtml && !isCurl) {
      return res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }

    res.json(getDirectoryIndex(req));
  });

  // Mount API v1 Routes
  app.use('/api/v1', apiV1Routes);
  app.use('/api', apiV1Routes); // Default alias to v1

  // 404 Handler for undefined routes
  app.use(notFoundHandler);

  // Global Error Handler
  app.use(errorHandler);

  return app;
}
