# ⚡ Naveen Kumar — Personal API & Visual Explorer

> Production-grade, extensible RESTful Personal API and Interactive Playground for **Naveen Kumar** (Software Development Engineer). Built with Node.js, Express, OpenAPI 3.0, and glassmorphic UI.

---

## 🚀 Quick Start

### 1. Run Locally
```bash
# Clone and enter the directory
git clone https://github.com/sdenaveenkumar/personal-api.git
cd personal-api

# Install dependencies
npm install

# Start development server (with hot-reload)
npm run dev

# Or start in production mode
npm start
```

### 2. Open Visual API Explorer
Once started, visit:
- **Interactive Web Explorer:** [http://localhost:3000](http://localhost:3000)
- **API v1 Directory:** [http://localhost:3000/api/v1](http://localhost:3000/api/v1)
- **OpenAPI 3.0 Specification:** [http://localhost:3000/openapi.json](http://localhost:3000/openapi.json)
- **Health Check:** [http://localhost:3000/health](http://localhost:3000/health)

---

## 📡 API Endpoints Overview

All responses return standard structured JSON with response latency headers (`X-Response-Time`) and rate-limit metadata.

| Method | Endpoint | Description | Query Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1` | Root API directory and service metadata | — |
| `GET` | `/api/v1/profile` | Full profile (identity, role, status, location) | — |
| `GET` | `/api/v1/bio` | Short, medium, long, or markdown bio | `?format=short\|medium\|long\|markdown` |
| `GET` | `/api/v1/skills` | Categorized technical skills | `?category=frontend\|backend...&featured=true` |
| `GET` | `/api/v1/projects` | Curated project portfolio | `?featured=true&tag=react&q=search` |
| `GET` | `/api/v1/projects/:slug`| Single project deep dive | `/api/v1/projects/create-naveen-react` |
| `GET` | `/api/v1/experience` | Engineering career timeline | `?type=full-time\|contract` |
| `GET` | `/api/v1/education` | Degrees (BCA @ Manipal) & DSA credentials | — |
| `GET` | `/api/v1/socials` | GitHub (@sdenaveenkumar), LinkedIn, WhatsApp | — |
| `GET` | `/api/v1/stats` | Real-time server uptime, memory, & stats | — |
| `GET` | `/api/v1/philosophy` | Engineering ethos & principles | — |
| `GET` | `/api/v1/hobbies` | Music, 3D web canvas, and creative coding | — |
| `GET` | `/api/v1/resume` | Standard JSON Resume schema representation | — |
| `GET` | `/api/v1/contact` | Public communication channels & preferences | — |
| `POST` | `/api/v1/contact` | Submit a direct contact message | JSON `{ name, email, message, subject }` |
| `GET` | `/openapi.json` | Complete OpenAPI 3.0 JSON spec | — |

---

## 💻 Sample cURL Requests

```bash
# Get Naveen's profile
curl -s http://localhost:3000/api/v1/profile | jq

# Get frontend skills
curl -s "http://localhost:3000/api/v1/skills?category=frontend" | jq

# Search projects
curl -s "http://localhost:3000/api/v1/projects?tag=react" | jq

# Get live server runtime stats
curl -s http://localhost:3000/api/v1/stats | jq

# Send a contact message
curl -X POST "http://localhost:3000/api/v1/contact" \
  -H "Content-Type: application/json" \
  -d '{"name":"Alex","email":"alex@example.com","message":"Hi Naveen! Lets connect."}'
```

---

## ☁️ Deployment on Oracle VPS

### Option A: Using Docker & Docker Compose (Recommended)

1. SSH into your Oracle Cloud VM:
```bash
ssh ubuntu@<YOUR-ORACLE-VPS-IP>
```

2. Clone and start:
```bash
git clone https://github.com/sdenaveenkumar/personal-api.git
cd personal-api
docker compose up -d --build
```

### Option B: Using PM2 (Node Process Manager)

```bash
npm install -g pm2
pm2 start ecosystem.config.cjs --env production
pm2 save
pm2 startup
```

### Option C: Nginx Reverse Proxy with SSL (Certbot)

Copy `nginx.conf.example` to `/etc/nginx/sites-available/api.naveenkumar.dev`:
```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/api.naveenkumar.dev
sudo ln -s /etc/nginx/sites-available/api.naveenkumar.dev /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d api.naveenkumar.dev
```

---

## 🧪 Testing

Run the automated test suite:
```bash
npm test
```

---

## 🛠️ Modifying Profile Details

All personal profile data is isolated in a clean, human-editable JSON file:
- File path: [`src/data/profile.json`](file:///Users/naveenkumar/Coding/Personal%20api/src/data/profile.json)

Whenever you want to add a new project, skill, certification, or update your bio, simply update `profile.json` and changes will reflect instantly across all endpoints and the interactive UI explorer.

---

## 📄 License
MIT © [Naveen Kumar](https://github.com/sdenaveenkumar)
