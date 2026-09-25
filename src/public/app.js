// ============================================================================
// Naveen Kumar — Personal API & Visual Explorer
// Interactive Engine, Multi-View Visual Renderer & Developer Telemetry
// ============================================================================

// Complete API Directory Definition
const ENDPOINTS = [
  {
    category: "Identity & Profile",
    items: [
      {
        id: "profile",
        name: "Full Profile",
        path: "/api/v1/profile",
        method: "GET",
        desc: "Returns Naveen Kumar's full developer profile, role, status, and core details.",
        params: []
      },
      {
        id: "bio",
        name: "Developer Bio",
        path: "/api/v1/bio",
        method: "GET",
        desc: "Returns short, medium, long, and markdown bios.",
        params: [
          { name: "format", label: "format (optional)", placeholder: "short, medium, long, markdown", type: "text" }
        ]
      },
      {
        id: "api-index",
        name: "API Directory Index",
        path: "/api/v1",
        method: "GET",
        desc: "Lists all available endpoints, schema links, and server meta.",
        params: []
      }
    ]
  },
  {
    category: "Academics & Marks Ledger",
    items: [
      {
        id: "academics-summary",
        name: "Academic Performance Summary",
        path: "/api/v1/academics/summary",
        method: "GET",
        desc: "Overall CGPA (8.82), Distinction standing, SGPA trend, and top scoring subjects.",
        params: []
      },
      {
        id: "academics-full",
        name: "Full Academic Ledger",
        path: "/api/v1/academics",
        method: "GET",
        desc: "Complete Manipal University Jaipur BCA marks ledger across all semesters.",
        params: []
      },
      {
        id: "academics-semesters",
        name: "All Semesters List",
        path: "/api/v1/academics/semesters",
        method: "GET",
        desc: "List of all BCA semesters (1 to 6) with SGPA and examination sessions.",
        params: []
      },
      {
        id: "academics-sem4",
        name: "Semester-4 Marks",
        path: "/api/v1/academics/semesters/4",
        method: "GET",
        desc: "Detailed marks breakdown for Semester-4 (Java, OS, System Software, Networking).",
        params: []
      },
      {
        id: "academics-courses",
        name: "Course Search & Grades",
        path: "/api/v1/academics/courses",
        method: "GET",
        desc: "Filter and search all courses across semesters by grade (A+, A, B+), min score, or topic.",
        params: [
          { name: "grade", label: "grade (e.g. A+, A, B+)", placeholder: "A+", type: "text" },
          { name: "semester", label: "semester (1 to 6)", placeholder: "4", type: "text" },
          { name: "q", label: "search course", placeholder: "Java, DBMS, C++...", type: "text" },
          { name: "minScore", label: "min score", placeholder: "85", type: "text" }
        ]
      }
    ]
  },
  {
    category: "Technical Stack",
    items: [
      {
        id: "skills-all",
        name: "All Skills",
        path: "/api/v1/skills",
        method: "GET",
        desc: "Returns categorized technical proficiencies (languages, frontend, backend, CS).",
        params: [
          { name: "category", label: "category", placeholder: "frontend, backend, languages, csFundamentals", type: "text" },
          { name: "featured", label: "featured", placeholder: "true / false", type: "text" }
        ]
      },
      {
        id: "skills-frontend",
        name: "Frontend Skills",
        path: "/api/v1/skills?category=frontend",
        method: "GET",
        desc: "Quick query for React 19, Tailwind, GSAP, and UI engineering skills.",
        params: []
      },
      {
        id: "skills-backend",
        name: "Backend & Systems",
        path: "/api/v1/skills?category=backend",
        method: "GET",
        desc: "Quick query for Node.js, Express, REST APIs, and database proficiencies.",
        params: []
      }
    ]
  },
  {
    category: "Projects & Tooling",
    items: [
      {
        id: "projects-all",
        name: "All Projects",
        path: "/api/v1/projects",
        method: "GET",
        desc: "Curated software engineering projects, GitHub repositories, and live demos.",
        params: [
          { name: "featured", label: "featured", placeholder: "true / false", type: "text" },
          { name: "tag", label: "tag", placeholder: "react, node, cli, saas, audio", type: "text" },
          { name: "q", label: "search (q)", placeholder: "music, CLI, animation...", type: "text" }
        ]
      },
      {
        id: "project-create-react",
        name: "create-naveen-react CLI",
        path: "/api/v1/projects/create-naveen-react",
        method: "GET",
        desc: "Details for Naveen's custom React CLI scaffolding tool.",
        params: []
      },
      {
        id: "project-cloudbeat",
        name: "Cloudbeat Music",
        path: "/api/v1/projects/cloudbeat-music",
        method: "GET",
        desc: "Details for Cloudbeat audio player & Web Audio streaming platform.",
        params: []
      },
      {
        id: "project-saas",
        name: "SaaS Platform Engine",
        path: "/api/v1/projects/saas-project",
        method: "GET",
        desc: "Details for multi-tenant SaaS architecture project.",
        params: []
      }
    ]
  },
  {
    category: "Career & Credentials",
    items: [
      {
        id: "experience",
        name: "Work Experience",
        path: "/api/v1/experience",
        method: "GET",
        desc: "Engineering career timeline, roles, impact, and responsibilities.",
        params: [
          { name: "type", label: "type", placeholder: "Full-time, Contract", type: "text" }
        ]
      },
      {
        id: "education",
        name: "Education & Foundations",
        path: "/api/v1/education",
        method: "GET",
        desc: "Degree, Manipal University BCA (8.82 CGPA), and Data Structures & Algorithms milestones.",
        params: []
      },
      {
        id: "resume",
        name: "JSON Resume",
        path: "/api/v1/resume",
        method: "GET",
        desc: "Standard JSON Resume schema format for programmatic parsing.",
        params: []
      }
    ]
  },
  {
    category: "System & Insights",
    items: [
      {
        id: "stats",
        name: "Live Server Stats",
        path: "/api/v1/stats",
        method: "GET",
        desc: "Real-time Node.js runtime stats, memory consumption, and uptime.",
        params: []
      },
      {
        id: "philosophy",
        name: "Engineering Philosophy",
        path: "/api/v1/philosophy",
        method: "GET",
        desc: "Core developer principles, architecture beliefs, and favorite quotes.",
        params: []
      },
      {
        id: "hobbies",
        name: "Hobbies & Creative",
        path: "/api/v1/hobbies",
        method: "GET",
        desc: "Music exploration, 3D canvas shaders, and creative coding.",
        params: []
      }
    ]
  },
  {
    category: "Connect & Contact",
    items: [
      {
        id: "socials",
        name: "Social Links",
        path: "/api/v1/socials",
        method: "GET",
        desc: "GitHub, LinkedIn, WhatsApp, Instagram, and Email handles.",
        params: []
      },
      {
        id: "contact-get",
        name: "Contact Channels (GET)",
        path: "/api/v1/contact",
        method: "GET",
        desc: "Public communication channels, response times, and preferences.",
        params: []
      },
      {
        id: "contact-post",
        name: "Send Message (POST)",
        path: "/api/v1/contact",
        method: "POST",
        desc: "Submit a direct contact message to Naveen Kumar.",
        params: [],
        defaultBody: {
          name: "Alex Johnson",
          email: "alex.johnson@techcorp.io",
          subject: "Engineering Role / Project Inquiry",
          message: "Hi Naveen! We were impressed by your work on Cloudbeat and create-naveen-react and would love to discuss an engineering opportunity with you."
        }
      }
    ]
  }
];

// App State
let activeEndpoint = ENDPOINTS[0].items[0];
let activeSnippetLang = "curl";
let activeResponseView = "visual"; // "visual" | "json" | "headers" | "schema"
let lastResponseData = null;
let lastResponseHeaders = [];
let openApiData = null;
let requestHistory = [];
let serverStartTime = Date.now();

// DOM Elements
const endpointNavList = document.getElementById("endpoint-nav-list");
const endpointSearch = document.getElementById("endpoint-search");
const searchCountBadge = document.getElementById("search-count-badge");
const catFilterPills = document.querySelectorAll(".cat-pill");
const activeMethodEl = document.getElementById("active-method");
const activePathEl = document.getElementById("active-path");
const activeDescEl = document.getElementById("active-desc");
const activeCategoryTag = document.getElementById("active-category-tag");
const paramsContainer = document.getElementById("params-container");
const paramsInputs = document.getElementById("params-inputs");
const bodyContainer = document.getElementById("body-container");
const bodyInput = document.getElementById("body-input");
const btnSendRequest = document.getElementById("btn-send-request");
const resStatusPill = document.getElementById("res-status-pill");
const resTimePill = document.getElementById("res-time-pill");
const resSizePill = document.getElementById("res-size-pill");
const snippetDisplay = document.getElementById("snippet-display");
const responseCodeDisplay = document.getElementById("response-code-display");
const btnCopySnippet = document.getElementById("btn-copy-snippet");
const btnCopyResponse = document.getElementById("btn-copy-response");
const btnDownloadResponse = document.getElementById("btn-download-response");
const btnCopyQuickCurl = document.getElementById("btn-copy-quick-curl");
const tabBtns = document.querySelectorAll(".tab-btn");
const resViewBtns = document.querySelectorAll(".res-view-btn");
const viewPanelVisual = document.getElementById("view-panel-visual");
const viewPanelJson = document.getElementById("view-panel-json");
const viewPanelHeaders = document.getElementById("view-panel-headers");
const viewPanelSchema = document.getElementById("view-panel-schema");
const visualPreviewContainer = document.getElementById("visual-preview-container");
const historyChips = document.getElementById("history-chips");
const jsonSearchInput = document.getElementById("json-search-input");
const jsonFilterWrap = document.getElementById("json-filter-wrap");
const uptimeTicker = document.getElementById("uptime-ticker");
const toastContainer = document.getElementById("toast-container");

// ============================================================================
// Toast Notification Utility
// ============================================================================
function showToast(message, type = "info") {
  if (!toastContainer) return;
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ============================================================================
// Live Server Uptime Ticker
// ============================================================================
function formatUptimeDuration(seconds) {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const pad = num => String(num).padStart(2, '0');
  if (d > 0) return `${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
  return `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}

async function initUptime() {
  try {
    const res = await fetch('/health');
    if (res.ok) {
      const data = await res.json();
      if (data.uptime) {
        let currentUptime = data.uptime;
        setInterval(() => {
          currentUptime += 1;
          if (uptimeTicker) {
            uptimeTicker.textContent = `Uptime: ${formatUptimeDuration(currentUptime)}`;
          }
        }, 1000);
        return;
      }
    }
  } catch (e) {
    // Fallback local ticking
  }
  let localSeconds = 60;
  setInterval(() => {
    localSeconds++;
    if (uptimeTicker) {
      uptimeTicker.textContent = `Uptime: ${formatUptimeDuration(localSeconds)}`;
    }
  }, 1000);
}

// ============================================================================
// Syntax Highlighting for JSON
// ============================================================================
function syntaxHighlight(json) {
  if (typeof json !== 'string') {
    json = JSON.stringify(json, null, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    let cls = 'json-number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'json-key';
      } else {
        cls = 'json-string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'json-boolean';
    } else if (/null/.test(match)) {
      cls = 'json-null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

// ============================================================================
// Render Endpoint Navigation with Category Filter
// ============================================================================
let activeCategoryFilter = "all";

function renderNav(searchQuery = "") {
  endpointNavList.innerHTML = "";
  const query = searchQuery.toLowerCase().trim();
  let totalMatches = 0;

  ENDPOINTS.forEach(cat => {
    if (activeCategoryFilter !== "all" && cat.category !== activeCategoryFilter) {
      return;
    }

    const matchedItems = cat.items.filter(item => 
      !query || 
      item.name.toLowerCase().includes(query) ||
      item.path.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );

    if (matchedItems.length === 0) return;
    totalMatches += matchedItems.length;

    const catEl = document.createElement("div");
    catEl.className = "nav-category";

    const titleEl = document.createElement("div");
    titleEl.className = "nav-category-title";
    titleEl.textContent = cat.category;
    catEl.appendChild(titleEl);

    const groupEl = document.createElement("div");
    groupEl.className = "nav-group";

    matchedItems.forEach(item => {
      const btn = document.createElement("button");
      btn.className = `nav-item ${item.id === activeEndpoint.id ? 'active' : ''}`;
      btn.innerHTML = `
        <span class="nav-method ${item.method === 'POST' ? 'method-post' : 'method-get'}">${item.method}</span>
        <span class="nav-route">${item.name}</span>
      `;
      btn.addEventListener("click", () => selectEndpoint(item, cat.category));
      groupEl.appendChild(btn);
    });

    catEl.appendChild(groupEl);
    endpointNavList.appendChild(catEl);
  });

  if (searchCountBadge) {
    searchCountBadge.textContent = totalMatches;
  }
}

// ============================================================================
// Select Endpoint
// ============================================================================
function selectEndpoint(endpoint, categoryName = "") {
  activeEndpoint = endpoint;
  renderNav(endpointSearch.value);

  activeMethodEl.textContent = endpoint.method;
  activeMethodEl.className = `method-badge ${endpoint.method.toLowerCase()}`;
  activePathEl.textContent = endpoint.path;
  activeDescEl.textContent = endpoint.desc;

  if (activeCategoryTag) {
    activeCategoryTag.textContent = categoryName || "API Endpoint";
  }

  // Render Query Params
  paramsInputs.innerHTML = "";
  if (endpoint.params && endpoint.params.length > 0) {
    paramsContainer.classList.remove("hidden");
    endpoint.params.forEach(p => {
      const field = document.createElement("div");
      field.className = "param-field";
      field.innerHTML = `
        <label class="param-label">${p.label}</label>
        <input type="${p.type || 'text'}" class="param-input" data-param="${p.name}" placeholder="${p.placeholder}">
      `;
      paramsInputs.appendChild(field);
    });
  } else {
    paramsContainer.classList.add("hidden");
  }

  // Render Body Input
  if (endpoint.method === "POST") {
    bodyContainer.classList.remove("hidden");
    bodyInput.value = JSON.stringify(endpoint.defaultBody || {}, null, 2);
  } else {
    bodyContainer.classList.add("hidden");
  }

  updateSnippets();
  renderSchemaView();
}

// ============================================================================
// Compute Target URL with dynamic query params
// ============================================================================
function getTargetUrl() {
  const [basePath, existingQuery] = activeEndpoint.path.split("?");
  const urlParams = new URLSearchParams(existingQuery || "");

  const paramInputs = paramsInputs.querySelectorAll(".param-input");
  paramInputs.forEach(input => {
    const val = input.value.trim();
    const name = input.getAttribute("data-param");
    if (val) {
      urlParams.set(name, val);
    } else {
      urlParams.delete(name);
    }
  });

  const queryString = urlParams.toString();
  return queryString ? `${basePath}?${queryString}` : basePath;
}

// ============================================================================
// Multi-Language Code Snippets Generator
// ============================================================================
function updateSnippets() {
  const path = getTargetUrl();
  const fullUrl = `${window.location.origin}${path}`;
  const isPost = activeEndpoint.method === "POST";
  let bodyStr = isPost ? bodyInput.value.trim() : "";

  if (activeSnippetLang === "curl") {
    if (isPost) {
      snippetDisplay.textContent = `curl -X POST "${fullUrl}" \\\n  -H "Content-Type: application/json" \\\n  -d '${bodyStr.replace(/\n/g, ' ')}'`;
    } else {
      snippetDisplay.textContent = `curl -s -X GET "${fullUrl}" | jq`;
    }
  } else if (activeSnippetLang === "fetch") {
    if (isPost) {
      snippetDisplay.textContent = `const response = await fetch("${fullUrl}", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify(${bodyStr || '{}'})\n});\nconst data = await response.json();\nconsole.log(data);`;
    } else {
      snippetDisplay.textContent = `const response = await fetch("${fullUrl}");\nconst data = await response.json();\nconsole.log(data);`;
    }
  } else if (activeSnippetLang === "axios") {
    if (isPost) {
      snippetDisplay.textContent = `import axios from 'axios';\n\nconst { data } = await axios.post("${fullUrl}", ${bodyStr || '{}'});\nconsole.log(data);`;
    } else {
      snippetDisplay.textContent = `import axios from 'axios';\n\nconst { data } = await axios.get("${fullUrl}");\nconsole.log(data);`;
    }
  } else if (activeSnippetLang === "python") {
    if (isPost) {
      snippetDisplay.textContent = `import requests\n\nurl = "${fullUrl}"\npayload = ${bodyStr || '{}'}\nheaders = {"Content-Type": "application/json"}\n\nresponse = requests.post(url, json=payload, headers=headers)\nprint(response.json())`;
    } else {
      snippetDisplay.textContent = `import requests\n\nurl = "${fullUrl}"\nresponse = requests.get(url)\nprint(response.json())`;
    }
  } else if (activeSnippetLang === "go") {
    if (isPost) {
      snippetDisplay.textContent = `package main\n\nimport (\n\t"bytes"\n\t"fmt"\n\t"net/http"\n\t"io"\n)\n\nfunc main() {\n\tbody := []byte(\`${bodyStr || '{}'}\`)\n\tres, _ := http.Post("${fullUrl}", "application/json", bytes.NewBuffer(body))\n\tdefer res.Body.Close()\n\tout, _ := io.ReadAll(res.Body)\n\tfmt.Println(string(out))\n}`;
    } else {
      snippetDisplay.textContent = `package main\n\nimport (\n\t"fmt"\n\t"net/http"\n\t"io"\n)\n\nfunc main() {\n\tres, _ := http.Get("${fullUrl}")\n\tdefer res.Body.Close()\n\tbody, _ := io.ReadAll(res.Body)\n\tfmt.Println(string(body))\n}`;
    }
  } else if (activeSnippetLang === "rust") {
    if (isPost) {
      snippetDisplay.textContent = `use reqwest;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let client = reqwest::Client::new();\n    let res = client.post("${fullUrl}")\n        .header("Content-Type", "application/json")\n        .body(r#"${bodyStr || '{}'}#" )\n        .send()\n        .await?\n        .text()\n        .await?;\n    println!("{}", res);\n    Ok(())\n}`;
    } else {
      snippetDisplay.textContent = `use reqwest;\n\n#[tokio::main]\nasync fn main() -> Result<(), Box<dyn std::error::Error>> {\n    let body = reqwest::get("${fullUrl}")\n        .await?\n        .text()\n        .await?;\n    println!("{}", body);\n    Ok(())\n}`;
    }
  }
}

// ============================================================================
// Format Bytes Utility
// ============================================================================
function formatBytes(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// ============================================================================
// Execute Live Request
// ============================================================================
async function executeRequest() {
  const path = getTargetUrl();
  const fullUrl = `${window.location.origin}${path}`;
  const isPost = activeEndpoint.method === "POST";

  btnSendRequest.disabled = true;
  btnSendRequest.innerHTML = `<svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/></circle></svg> Executing...`;
  
  resStatusPill.className = "metric-pill metric-status";
  resStatusPill.textContent = "Fetching...";
  resTimePill.textContent = "...";
  resSizePill.textContent = "...";

  const startTime = performance.now();

  try {
    let options = {
      method: activeEndpoint.method,
      headers: {
        "Accept": "application/json"
      }
    };

    if (isPost) {
      options.headers["Content-Type"] = "application/json";
      options.body = bodyInput.value;
    }

    const response = await fetch(fullUrl, options);
    const duration = Math.round(performance.now() - startTime);

    // Extract headers
    lastResponseHeaders = [];
    response.headers.forEach((val, key) => {
      lastResponseHeaders.push({ key, val });
    });

    const rawText = await response.text();
    const payloadBytes = new Blob([rawText]).size;
    let json = null;
    try {
      json = JSON.parse(rawText);
    } catch (e) {
      json = { raw: rawText };
    }

    lastResponseData = json;

    // Update Status Metrics
    resStatusPill.textContent = `${response.status} ${response.statusText || (response.ok ? 'OK' : 'Error')}`;
    resStatusPill.className = `metric-pill metric-status status-${response.status}`;
    resTimePill.textContent = `${duration} ms`;
    resSizePill.textContent = formatBytes(payloadBytes);

    // Update Raw Code Viewer
    responseCodeDisplay.innerHTML = syntaxHighlight(json);

    // Render Telemetry & Headers
    renderTelemetryView(response.status, response.statusText, duration, payloadBytes, fullUrl);

    // Render Visual Mode
    try {
      renderVisualPreview(json, activeEndpoint);
    } catch (visErr) {
      console.warn("Visual preview rendering error:", visErr);
    }

    // Add to history
    addToHistory(activeEndpoint.method, path, response.status, duration);

    showToast(`Request complete (${response.status}) in ${duration} ms`, response.ok ? 'success' : 'error');

  } catch (err) {
    const duration = Math.round(performance.now() - startTime);
    resStatusPill.textContent = `Failed`;
    resStatusPill.className = "metric-pill metric-status status-500";
    resTimePill.textContent = `${duration} ms`;
    resSizePill.textContent = `0 B`;

    responseCodeDisplay.innerHTML = `<span style="color: #fb7185;">Network Error: ${err.message}</span>`;
    visualPreviewContainer.innerHTML = `
      <div class="visual-placeholder" style="color: #fb7185;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <p>Request Failed: ${err.message}</p>
      </div>
    `;
    showToast(`Failed: ${err.message}`, 'error');
  } finally {
    btnSendRequest.disabled = false;
    btnSendRequest.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>Execute Request</span><span class="btn-kbd-shortcut">⌘↵</span>`;
  }
}

// ============================================================================
// History Manager
// ============================================================================
function addToHistory(method, path, status, latency) {
  requestHistory.unshift({ method, path, status, latency, time: new Date() });
  if (requestHistory.length > 6) requestHistory.pop();
  renderHistoryChips();
}

function renderHistoryChips() {
  if (!historyChips) return;
  if (requestHistory.length === 0) {
    historyChips.innerHTML = '<span class="history-empty">No requests yet</span>';
    return;
  }

  historyChips.innerHTML = "";
  requestHistory.forEach(item => {
    const chip = document.createElement("button");
    chip.className = "history-chip";
    chip.innerHTML = `
      <span class="history-method">${item.method}</span>
      <span>${item.path}</span>
      <span style="color: ${item.status === 200 || item.status === 201 ? '#34d399' : '#fb7185'}; font-size: 0.65rem;">${item.status}</span>
    `;
    chip.addEventListener("click", () => {
      // Find matching endpoint
      for (const cat of ENDPOINTS) {
        const found = cat.items.find(i => i.path === item.path || item.path.startsWith(i.path));
        if (found) {
          selectEndpoint(found, cat.category);
          executeRequest();
          break;
        }
      }
    });
    historyChips.appendChild(chip);
  });
}

// ============================================================================
// Render HTTP Telemetry & Response Headers
// ============================================================================
function renderTelemetryView(status, statusText, duration, size, url) {
  const telCode = document.getElementById("tel-code");
  const telMsg = document.getElementById("tel-msg");
  const telLatency = document.getElementById("tel-latency");
  const telSize = document.getElementById("tel-size");
  const telContentType = document.getElementById("tel-content-type");
  const telEndpoint = document.getElementById("tel-endpoint");
  const headersTbody = document.getElementById("headers-tbody");

  if (telCode) telCode.textContent = `${status} ${statusText || (status < 400 ? 'OK' : 'Error')}`;
  if (telMsg) {
    if (status === 200) telMsg.textContent = "Standard successful HTTP response.";
    else if (status === 201) telMsg.textContent = "Resource successfully created / message recorded.";
    else if (status === 400) telMsg.textContent = "Bad Request — client payload validation failed.";
    else if (status === 404) telMsg.textContent = "Resource or route not found.";
    else telMsg.textContent = "HTTP transaction completed.";
  }
  if (telLatency) telLatency.textContent = `${duration} ms`;
  if (telSize) telSize.textContent = formatBytes(size);
  if (telEndpoint) telEndpoint.textContent = `${activeEndpoint.method} ${url}`;

  // Headers Table
  if (headersTbody) {
    headersTbody.innerHTML = "";
    if (lastResponseHeaders.length === 0) {
      headersTbody.innerHTML = '<tr><td colspan="2" class="table-empty">No headers exposed</td></tr>';
      return;
    }
    lastResponseHeaders.forEach(h => {
      if (h.key.toLowerCase() === 'content-type' && telContentType) {
        telContentType.textContent = h.val;
      }
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${h.key}</td><td>${h.val}</td>`;
      headersTbody.appendChild(tr);
    });
  }
}

// ============================================================================
// Rich Visual Previews Renderer
// ============================================================================
function renderVisualPreview(data, endpoint) {
  if (!visualPreviewContainer) return;

  if (!data) {
    visualPreviewContainer.innerHTML = '<div class="visual-placeholder"><p>No data returned</p></div>';
    return;
  }

  // 1. Academics Performance Summary
  if (endpoint.id === "academics-summary" || (data.summary && data.summary.overallCGPA)) {
    const s = data.summary || data;
    const cgpa = s.overallCGPA || 8.82;
    const standing = s.academicStanding || "Distinction";
    const dist = s.gradeDistribution || {};
    const topCourses = s.highestScoringCourses || [];

    visualPreviewContainer.innerHTML = `
      <div class="academics-hero-grid">
        <div class="cgpa-gauge-box">
          <div class="cgpa-circle">
            <div class="cgpa-inner">
              <span class="cgpa-num">${cgpa}</span>
              <span class="cgpa-max">/ 10.0 CGPA</span>
            </div>
          </div>
          <span class="distinction-ribbon">★ ${standing}</span>
        </div>

        <div class="academic-stats-cluster">
          <div class="acad-stat-card">
            <span class="acad-stat-label">Total Credits</span>
            <span class="acad-stat-value">${s.totalCreditsCompleted || 88}</span>
          </div>
          <div class="acad-stat-card">
            <span class="acad-stat-label">Courses Done</span>
            <span class="acad-stat-value">${s.totalCoursesCompleted || 22}</span>
          </div>
          <div class="acad-stat-card">
            <span class="acad-stat-label">Pass Rate</span>
            <span class="acad-stat-value" style="color: #34d399;">${s.passRate || '100%'}</span>
          </div>
          <div class="acad-stat-card">
            <span class="acad-stat-label">Semesters</span>
            <span class="acad-stat-value">${s.totalPublishedSemesters || 4} of 6</span>
          </div>
        </div>
      </div>

      <!-- SGPA Trend Timeline -->
      <div class="sgpa-trend-container">
        <div class="section-title">Semester Progression & SGPA Trend</div>
        <div class="trend-bars-row">
          <div class="trend-col">
            <div class="trend-sem-title">Semester 1</div>
            <div class="trend-val">9.50 SGPA</div>
            <div class="trend-meter"><div class="trend-fill" style="width: 95%;"></div></div>
          </div>
          <div class="trend-col">
            <div class="trend-sem-title">Semester 2</div>
            <div class="trend-val">8.70 SGPA</div>
            <div class="trend-meter"><div class="trend-fill" style="width: 87%;"></div></div>
          </div>
          <div class="trend-col">
            <div class="trend-sem-title">Semester 3</div>
            <div class="trend-val">8.65 SGPA</div>
            <div class="trend-meter"><div class="trend-fill" style="width: 86.5%;"></div></div>
          </div>
          <div class="trend-col">
            <div class="trend-sem-title">Semester 4</div>
            <div class="trend-val">8.43 SGPA</div>
            <div class="trend-meter"><div class="trend-fill" style="width: 84.3%;"></div></div>
          </div>
        </div>
      </div>

      <!-- Grade Breakdown Badges -->
      <div class="section-title" style="margin-bottom: 0.5rem;">Grade Distribution</div>
      <div class="grade-dist-strip">
        <span class="grade-badge-card grade-aplus">A+ Grade: ${dist['A+'] || 7} courses</span>
        <span class="grade-badge-card grade-a">A Grade: ${dist['A'] || 9} courses</span>
        <span class="grade-badge-card grade-bplus">B+ Grade: ${dist['B+'] || 5} courses</span>
        <span class="grade-badge-card grade-cplus">C+ Grade: ${dist['C+'] || 1} course</span>
      </div>

      ${topCourses.length > 0 ? `
        <div class="section-title" style="margin-top: 1rem; margin-bottom: 0.5rem;">Highest Scoring Courses</div>
        <div class="visual-table-wrap">
          <table class="visual-data-table">
            <thead>
              <tr><th>Code</th><th>Course Name</th><th>Semester</th><th>Score</th><th>Grade</th></tr>
            </thead>
            <tbody>
              ${topCourses.map(c => `
                <tr>
                  <td><span class="course-code-pill">${c.code}</span></td>
                  <td style="font-weight: 500; color: #f1f5f9;">${c.name}</td>
                  <td>Sem ${c.semester}</td>
                  <td>
                    <div class="score-bar-box">
                      <span style="font-family: var(--font-mono); font-weight: 700; color: #34d399;">${c.score}/100</span>
                      <div class="score-progress"><div class="score-fill" style="width: ${c.score}%;"></div></div>
                    </div>
                  </td>
                  <td><span class="grade-badge-card grade-aplus" style="padding: 0.15rem 0.45rem;">${c.grade}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      ` : ''}
    `;
    return;
  }

  // 2. Courses or Semesters List
  if (Array.isArray(data.courses) || endpoint.id === "academics-courses" || endpoint.id === "academics-sem4") {
    const list = data.courses || (Array.isArray(data) ? data : []);
    visualPreviewContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
        <span class="section-title">Course Records (${list.length})</span>
        <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">BCA Curriculum • Manipal University</span>
      </div>
      <div class="visual-table-wrap">
        <table class="visual-data-table">
          <thead>
            <tr><th>Code</th><th>Course Subject</th><th>Internal (30)</th><th>External (70)</th><th>Total Score</th><th>Grade</th></tr>
          </thead>
          <tbody>
            ${list.map(c => {
              const intScore = c.internal ? c.internal.obtained : '-';
              const extScore = c.external ? c.external.obtained : '-';
              const total = c.total || c.score || 0;
              const gradeCls = c.grade === 'A+' ? 'grade-aplus' : c.grade === 'A' ? 'grade-a' : 'grade-bplus';
              return `
                <tr>
                  <td><span class="course-code-pill">${c.code}</span></td>
                  <td style="font-weight: 500; color: #f8fafc;">${c.name}</td>
                  <td style="font-family: var(--font-mono);">${intScore}</td>
                  <td style="font-family: var(--font-mono);">${extScore}</td>
                  <td>
                    <div class="score-bar-box">
                      <span style="font-family: var(--font-mono); font-weight: 700; color: #f1f5f9;">${total}</span>
                      <div class="score-progress"><div class="score-fill" style="width: ${total}%;"></div></div>
                    </div>
                  </td>
                  <td><span class="grade-badge-card ${gradeCls}" style="padding: 0.15rem 0.45rem;">${c.grade}</span></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
    return;
  }

  // 3. Technical Skills View
  if (data.skills || endpoint.id.startsWith("skills")) {
    let skillCategories = {};

    if (Array.isArray(data.data)) {
      // Filtered single category response (e.g. /skills?category=frontend)
      const catName = data.category || "Selected Category";
      skillCategories[catName] = data.data;
    } else if (data.data && typeof data.data === 'object' && !Array.isArray(data.data)) {
      // Full skills response with data.data = { languages: [...], frontend: [...] }
      skillCategories = data.data;
    } else if (data.skills && typeof data.skills === 'object') {
      skillCategories = data.skills;
    } else {
      // Extract any array property containing skill objects
      Object.keys(data).forEach(k => {
        if (Array.isArray(data[k]) && k !== 'categories') {
          skillCategories[k] = data[k];
        }
      });
    }

    const categoryKeys = Object.keys(skillCategories).filter(k => Array.isArray(skillCategories[k]));

    if (categoryKeys.length > 0) {
      visualPreviewContainer.innerHTML = `
        <div class="skills-grid-visual">
          ${categoryKeys.map(catKey => {
            const items = skillCategories[catKey] || [];
            const catTitle = catKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            return `
              <div class="skill-category-card">
                <div class="skill-cat-header">
                  <span class="skill-cat-title">${catTitle}</span>
                  <span class="skill-count-badge">${items.length} skills</span>
                </div>
                <div class="skill-items-list">
                  ${items.map(s => {
                    const skillName = typeof s === 'string' ? s : (s && s.name ? s.name : 'Unknown Skill');
                    const skillLevel = (s && s.level) ? String(s.level) : 'Proficient';
                    const levelCls = skillLevel.toLowerCase() === 'expert' ? 'level-expert' : skillLevel.toLowerCase() === 'advanced' ? 'level-advanced' : 'level-intermediate';
                    const isFeatured = s && s.featured;
                    return `
                      <div class="skill-item-row">
                        <span class="skill-name-col">
                          ${isFeatured ? '<span class="skill-featured-star">★</span>' : ''}
                          <span>${skillName}</span>
                        </span>
                        <span class="skill-level-badge ${levelCls}">${skillLevel}</span>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
      return;
    }
  }

  // 4. Projects Portfolio View
  if (Array.isArray(data.projects) || endpoint.id.startsWith("project")) {
    const projectsList = Array.isArray(data.projects) ? data.projects : [data.project || data];
    visualPreviewContainer.innerHTML = `
      <div class="projects-grid-visual">
        ${projectsList.map(p => `
          <div class="project-visual-card">
            <div class="proj-header-row">
              <span class="proj-title">${p.title || p.name}</span>
              ${p.featured ? '<span class="role-tag" style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.4); color: #fbbf24; font-size: 0.72rem;">★ Featured</span>' : ''}
            </div>
            <p class="proj-desc">${p.tagline || p.description}</p>
            
            <div class="proj-tags-row">
              ${(p.tags || p.techStack || []).map(t => `<span class="proj-tag-pill">${t}</span>`).join('')}
            </div>

            <div class="proj-actions-row">
              ${p.demo || p.liveDemo ? `<a href="${p.demo || p.liveDemo}" target="_blank" class="proj-btn proj-btn-primary"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Live Demo</a>` : ''}
              ${p.github || p.repository ? `<a href="${p.github || p.repository}" target="_blank" class="proj-btn"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  // 5. System Stats View
  if (endpoint.id === "stats" || data.serverMetrics) {
    const sm = data.serverMetrics || {};
    const pm = data.portfolioMetrics || {};
    visualPreviewContainer.innerHTML = `
      <div class="stats-gauges-grid">
        <div class="gauge-card">
          <span class="gauge-title">Server Uptime</span>
          <span class="gauge-val" style="color: #38bdf8;">${sm.uptime || 'Active'}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">Started: ${sm.startedAt ? new Date(sm.startedAt).toLocaleTimeString() : 'Recent'}</span>
        </div>
        <div class="gauge-card">
          <span class="gauge-title">Heap Memory Used</span>
          <span class="gauge-val" style="color: #34d399;">${sm.memoryUsage ? sm.memoryUsage.heapUsed : 'N/A'}</span>
          <div class="gauge-bar-track"><div class="gauge-bar-fill" style="width: 45%;"></div></div>
        </div>
        <div class="gauge-card">
          <span class="gauge-title">Node.js Runtime</span>
          <span class="gauge-val">${sm.nodeVersion || process.version || 'v26.x'}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">${sm.platform || 'macOS'} (${sm.architecture || 'arm64'})</span>
        </div>
        <div class="gauge-card">
          <span class="gauge-title">CPU Processing Cores</span>
          <span class="gauge-val" style="color: #c084fc;">${sm.cpuCount || 8} Cores</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">Active multi-threading</span>
        </div>
      </div>

      <div class="section-title" style="margin-bottom: 0.75rem;">Catalog Stats</div>
      <div class="academic-stats-cluster">
        <div class="acad-stat-card">
          <span class="acad-stat-label">Total Skills</span>
          <span class="acad-stat-value">${pm.totalSkills || 25}</span>
        </div>
        <div class="acad-stat-card">
          <span class="acad-stat-label">Total Projects</span>
          <span class="acad-stat-value">${pm.totalProjects || 4}</span>
        </div>
        <div class="acad-stat-card">
          <span class="acad-stat-label">Featured Projects</span>
          <span class="acad-stat-value" style="color: #fbbf24;">${pm.featuredProjects || 2}</span>
        </div>
        <div class="acad-stat-card">
          <span class="acad-stat-label">Social Channels</span>
          <span class="acad-stat-value">${pm.socialChannelsCount || 5}</span>
        </div>
      </div>
    `;
    return;
  }

  // 6. Generic Object / Array Card Fallback
  visualPreviewContainer.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <div class="section-title">Structured Payload View</div>
      <div class="visual-table-wrap">
        <table class="visual-data-table">
          <thead>
            <tr><th>Field / Key</th><th>Value</th></tr>
          </thead>
          <tbody>
            ${Object.keys(data).map(key => {
              const val = data[key];
              const displayVal = typeof val === 'object' ? JSON.stringify(val) : String(val);
              return `
                <tr>
                  <td style="font-family: var(--font-mono); color: var(--accent-cyan); font-weight: 600;">${key}</td>
                  <td style="word-break: break-word;">${displayVal}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ============================================================================
// Render OpenAPI Schema View
// ============================================================================
async function renderSchemaView() {
  const schemaDisplay = document.getElementById("schema-display");
  if (!schemaDisplay) return;

  if (!openApiData) {
    try {
      const res = await fetch("/openapi.json");
      if (res.ok) openApiData = await res.json();
    } catch (e) {
      schemaDisplay.innerHTML = `<span style="color: #fb7185;">Failed to load OpenAPI specification</span>`;
      return;
    }
  }

  if (!openApiData) return;

  const currentPath = activeEndpoint.path.split("?")[0].replace(/^\/api\/v1/, "") || "/";
  const pathItem = openApiData.paths ? (openApiData.paths[currentPath] || openApiData.paths[activeEndpoint.path]) : null;
  const op = pathItem ? (pathItem[activeEndpoint.method.toLowerCase()] || pathItem.get || pathItem.post) : null;

  if (op) {
    schemaDisplay.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="schema-badge">${activeEndpoint.method}</span>
          <span style="font-family: var(--font-mono); font-weight: 700; font-size: 1rem; color: #f8fafc;">${currentPath}</span>
        </div>
        <p style="color: var(--text-secondary);">${op.summary || op.description || 'OpenAPI 3.0 Schema Definition'}</p>

        ${op.parameters && op.parameters.length > 0 ? `
          <div class="section-title">Query Parameters</div>
          <div class="visual-table-wrap">
            <table class="visual-data-table">
              <thead><tr><th>Param</th><th>In</th><th>Type</th><th>Description</th></tr></thead>
              <tbody>
                ${op.parameters.map(p => `
                  <tr>
                    <td style="font-family: var(--font-mono); color: var(--accent-cyan);">${p.name}</td>
                    <td>${p.in}</td>
                    <td><span class="course-code-pill">${p.schema ? p.schema.type : 'string'}</span></td>
                    <td>${p.description || '-'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}

        <div class="section-title" style="margin-top: 0.5rem;">Expected Responses</div>
        <div class="visual-table-wrap">
          <table class="visual-data-table">
            <thead><tr><th>Status</th><th>Description</th></tr></thead>
            <tbody>
              ${Object.keys(op.responses || {}).map(code => `
                <tr>
                  <td><span class="grade-badge-card ${code.startsWith('2') ? 'grade-aplus' : 'grade-cplus'}" style="padding: 0.15rem 0.45rem;">${code}</span></td>
                  <td>${op.responses[code].description || 'Success response'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    schemaDisplay.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <span class="section-title">OpenAPI 3.0 Documentation</span>
        <p style="color: var(--text-secondary);">Direct schema definition for <code>${activeEndpoint.path}</code> is documented under the main OpenAPI specification.</p>
        <p><a href="/openapi.json" target="_blank" class="nav-link" style="display: inline-flex; width: fit-content; margin-top: 0.5rem;">View Full openapi.json</a></p>
      </div>
    `;
  }
}

// ============================================================================
// Copy to Clipboard Utility
// ============================================================================
function copyToClipboard(text, successMsg = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg, "success");
  }).catch(() => {
    showToast("Failed to copy", "error");
  });
}

// ============================================================================
// Download Response JSON Utility
// ============================================================================
function downloadResponseJson() {
  if (!lastResponseData) {
    showToast("No response data to download", "error");
    return;
  }
  const str = JSON.stringify(lastResponseData, null, 2);
  const blob = new Blob([str], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${activeEndpoint.id}-response.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Downloaded ${activeEndpoint.id}-response.json`, "success");
}

// ============================================================================
// View Mode Switching
// ============================================================================
function switchResponseView(viewName) {
  activeResponseView = viewName;
  resViewBtns.forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-view") === viewName);
  });

  viewPanelVisual.classList.toggle("hidden", viewName !== "visual");
  viewPanelJson.classList.toggle("hidden", viewName !== "json");
  viewPanelHeaders.classList.toggle("hidden", viewName !== "headers");
  viewPanelSchema.classList.toggle("hidden", viewName !== "schema");

  if (jsonFilterWrap) {
    jsonFilterWrap.classList.toggle("hidden", viewName !== "json");
  }

  if (viewName === "schema") {
    renderSchemaView();
  }
}

// ============================================================================
// Event Listeners & Initialization
// ============================================================================
endpointSearch.addEventListener("input", (e) => {
  renderNav(e.target.value);
});

catFilterPills.forEach(pill => {
  pill.addEventListener("click", () => {
    catFilterPills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    activeCategoryFilter = pill.getAttribute("data-cat");
    renderNav(endpointSearch.value);
  });
});

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeSnippetLang = btn.getAttribute("data-lang");
    updateSnippets();
  });
});

resViewBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    switchResponseView(btn.getAttribute("data-view"));
  });
});

paramsInputs.addEventListener("input", updateSnippets);
bodyInput.addEventListener("input", updateSnippets);

btnSendRequest.addEventListener("click", executeRequest);

btnCopySnippet.addEventListener("click", () => {
  copyToClipboard(snippetDisplay.textContent, "Snippet copied to clipboard!");
});

btnCopyResponse.addEventListener("click", () => {
  copyToClipboard(responseCodeDisplay.innerText, "Response JSON copied!");
});

if (btnDownloadResponse) {
  btnDownloadResponse.addEventListener("click", downloadResponseJson);
}

if (btnCopyQuickCurl) {
  btnCopyQuickCurl.addEventListener("click", () => {
    const curlCommand = `curl -s ${window.location.origin}/api/v1/profile | jq`;
    copyToClipboard(curlCommand, "cURL query copied!");
  });
}

// Search inside JSON
if (jsonSearchInput) {
  jsonSearchInput.addEventListener("input", (e) => {
    if (!lastResponseData) return;
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      responseCodeDisplay.innerHTML = syntaxHighlight(lastResponseData);
      return;
    }
    const raw = JSON.stringify(lastResponseData, null, 2);
    const highlighted = syntaxHighlight(raw);
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    responseCodeDisplay.innerHTML = highlighted.replace(regex, '<mark style="background: rgba(245, 158, 11, 0.4); color: #fff; padding: 0 2px; border-radius: 2px;">$1</mark>');
  });
}

// Keyboard shortcuts (⌘+Enter / Ctrl+Enter to execute, '/' to search)
window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
    e.preventDefault();
    executeRequest();
  } else if (e.key === "/" && document.activeElement !== endpointSearch && document.activeElement !== bodyInput) {
    e.preventDefault();
    endpointSearch.focus();
    endpointSearch.select();
  } else if (e.key === "Escape") {
    if (document.activeElement === endpointSearch) {
      endpointSearch.blur();
    }
  }
});

// Theme Switcher (Default: Day Mode)
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeModeText = document.getElementById("theme-mode-text");

function applyTheme(theme) {
  const isDark = theme === "dark";
  if (isDark) {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeToggleBtn) {
      themeToggleBtn.title = "Switch to Light Mode";
      themeToggleBtn.innerHTML = `
        <svg class="theme-icon sun-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <span id="theme-mode-text">Light Mode</span>
      `;
    }
  } else {
    document.documentElement.removeAttribute("data-theme");
    if (themeToggleBtn) {
      themeToggleBtn.title = "Switch to Dark Mode";
      themeToggleBtn.innerHTML = `
        <svg class="theme-icon moon-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <span id="theme-mode-text">Dark Mode</span>
      `;
    }
  }
  try {
    localStorage.setItem("api_explorer_theme", theme);
  } catch (e) {}
}

const savedTheme = (function() {
  try {
    return localStorage.getItem("api_explorer_theme") || "light";
  } catch (e) {
    return "light";
  }
})();
applyTheme(savedTheme);

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === 'light' ? 'Day' : 'Dark'} Mode`, 'info');
  });
}

// Boot
initUptime();
renderNav();
selectEndpoint(activeEndpoint, "Identity & Profile");
executeRequest();
