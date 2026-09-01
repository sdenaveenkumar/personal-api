// Endpoint definitions
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
        desc: "List of all BCA semesters (1 to 6) with SGPA and published examination sessions.",
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
        desc: "Filter and search all courses across semesters by grade (A+, A, B+), minimum marks, or topic.",
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

// State
let activeEndpoint = ENDPOINTS[0].items[0];
let activeSnippetLang = "curl";

// DOM Elements
const endpointNavList = document.getElementById("endpoint-nav-list");
const endpointSearch = document.getElementById("endpoint-search");
const activeMethodEl = document.getElementById("active-method");
const activePathEl = document.getElementById("active-path");
const activeDescEl = document.getElementById("active-desc");
const paramsContainer = document.getElementById("params-container");
const paramsInputs = document.getElementById("params-inputs");
const bodyContainer = document.getElementById("body-container");
const bodyInput = document.getElementById("body-input");
const btnSendRequest = document.getElementById("btn-send-request");
const resStatusPill = document.getElementById("res-status-pill");
const resTimePill = document.getElementById("res-time-pill");
const snippetDisplay = document.getElementById("snippet-display");
const responseCodeDisplay = document.getElementById("response-code-display");
const btnCopySnippet = document.getElementById("btn-copy-snippet");
const btnCopyResponse = document.getElementById("btn-copy-response");
const btnCopyQuickCurl = document.getElementById("btn-copy-quick-curl");
const tabBtns = document.querySelectorAll(".tab-btn");

// Syntax Highlighting for JSON
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

// Render Endpoint Nav
function renderNav(filter = "") {
  endpointNavList.innerHTML = "";
  const filterLower = filter.toLowerCase();

  ENDPOINTS.forEach(cat => {
    const matchedItems = cat.items.filter(item => 
      item.name.toLowerCase().includes(filterLower) ||
      item.path.toLowerCase().includes(filterLower) ||
      item.desc.toLowerCase().includes(filterLower)
    );

    if (matchedItems.length === 0) return;

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
      btn.addEventListener("click", () => selectEndpoint(item));
      groupEl.appendChild(btn);
    });

    catEl.appendChild(groupEl);
    endpointNavList.appendChild(catEl);
  });
}

// Select Endpoint
function selectEndpoint(endpoint) {
  activeEndpoint = endpoint;
  renderNav(endpointSearch.value);

  activeMethodEl.textContent = endpoint.method;
  activeMethodEl.className = `method-badge ${endpoint.method.toLowerCase()}`;
  activePathEl.textContent = endpoint.path;
  activeDescEl.textContent = endpoint.desc;

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
}

// Compute Target URL with dynamic query params
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

// Update Code Snippets
function updateSnippets() {
  const path = getTargetUrl();
  const fullUrl = `${window.location.origin}${path}`;
  const isPost = activeEndpoint.method === "POST";
  let bodyStr = isPost ? bodyInput.value.trim() : "";

  if (activeSnippetLang === "curl") {
    if (isPost) {
      snippetDisplay.textContent = `curl -X POST "${fullUrl}" \\\n  -H "Content-Type: application/json" \\\n  -d '${bodyStr.replace(/\n/g, ' ')}'`;
    } else {
      snippetDisplay.textContent = `curl -X GET "${fullUrl}"`;
    }
  } else if (activeSnippetLang === "fetch") {
    if (isPost) {
      snippetDisplay.textContent = `fetch("${fullUrl}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(${bodyStr || '{}'})
})
  .then(res => res.json())
  .then(data => console.log(data));`;
    } else {
      snippetDisplay.textContent = `fetch("${fullUrl}")
  .then(res => res.json())
  .then(data => console.log(data));`;
    }
  } else if (activeSnippetLang === "python") {
    if (isPost) {
      snippetDisplay.textContent = `import requests

url = "${fullUrl}"
payload = ${bodyStr || '{}'}
headers = {"Content-Type": "application/json"}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`;
    } else {
      snippetDisplay.textContent = `import requests

url = "${fullUrl}"
response = requests.get(url)
print(response.json())`;
    }
  }
}

// Execute Request Live
async function executeRequest() {
  const path = getTargetUrl();
  const fullUrl = `${window.location.origin}${path}`;
  const isPost = activeEndpoint.method === "POST";

  btnSendRequest.disabled = true;
  btnSendRequest.innerHTML = `<svg class="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite"/></circle></svg> Executing...`;
  
  resStatusPill.className = "metric-pill metric-status";
  resStatusPill.textContent = "Fetching...";
  resTimePill.textContent = "...";

  const startTime = performance.now();

  try {
    let options = {
      method: activeEndpoint.method,
      headers: {}
    };

    if (isPost) {
      options.headers["Content-Type"] = "application/json";
      options.body = bodyInput.value;
    }

    const response = await fetch(fullUrl, options);
    const duration = Math.round(performance.now() - startTime);

    const json = await response.json();

    resStatusPill.textContent = `${response.status} ${response.statusText || (response.ok ? 'OK' : 'Error')}`;
    resStatusPill.className = `metric-pill metric-status status-${response.status}`;
    resTimePill.textContent = `${duration} ms`;

    responseCodeDisplay.innerHTML = syntaxHighlight(json);
  } catch (err) {
    const duration = Math.round(performance.now() - startTime);
    resStatusPill.textContent = `Failed`;
    resStatusPill.className = "metric-pill metric-status status-500";
    resTimePill.textContent = `${duration} ms`;

    responseCodeDisplay.innerHTML = `<span style="color: #fb7185;">Error: ${err.message}</span>`;
  } finally {
    btnSendRequest.disabled = false;
    btnSendRequest.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>Execute Request</span>`;
  }
}

// Copy to Clipboard Utility
function copyToClipboard(text, buttonEl, successText = "Copied!") {
  const originalHtml = buttonEl.innerHTML;
  navigator.clipboard.writeText(text).then(() => {
    buttonEl.textContent = successText;
    setTimeout(() => {
      buttonEl.innerHTML = originalHtml;
    }, 2000);
  });
}

// Event Listeners
endpointSearch.addEventListener("input", (e) => {
  renderNav(e.target.value);
});

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeSnippetLang = btn.getAttribute("data-lang");
    updateSnippets();
  });
});

paramsInputs.addEventListener("input", updateSnippets);
bodyInput.addEventListener("input", updateSnippets);

btnSendRequest.addEventListener("click", executeRequest);

btnCopySnippet.addEventListener("click", () => {
  copyToClipboard(snippetDisplay.textContent, btnCopySnippet, "Snippet Copied!");
});

btnCopyResponse.addEventListener("click", () => {
  copyToClipboard(responseCodeDisplay.innerText, btnCopyResponse, "JSON Copied!");
});

if (btnCopyQuickCurl) {
  btnCopyQuickCurl.addEventListener("click", () => {
    const curlCommand = `curl -s ${window.location.origin}/api/v1/profile | jq`;
    copyToClipboard(curlCommand, btnCopyQuickCurl, "Copied!");
  });
}

// Initialize
renderNav();
selectEndpoint(activeEndpoint);
executeRequest();
