import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'http';
import { createApp } from '../src/app.js';

let server;
let baseUrl;

test.before(async () => {
  const app = createApp();
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

test.after(async () => {
  await new Promise((resolve) => server.close(resolve));
});

test('GET /health returns healthy status and uptime', async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.status, 'healthy');
  assert.ok(typeof data.uptime === 'number');
});

test('GET /openapi.json returns valid OpenAPI 3.0 specification', async () => {
  const res = await fetch(`${baseUrl}/openapi.json`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.openapi, '3.0.3');
  assert.equal(data.info.title, 'Naveen Kumar - Personal API');
});

test('Content Negotiation: GET / with Accept: application/json returns JSON directory index', async () => {
  const res = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'application/json' }
  });
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.endpoints.profile);
  assert.ok(data.endpoints.academics);
});

test('Content Negotiation: GET / with Accept: text/html returns interactive UI page', async () => {
  const res = await fetch(`${baseUrl}/`, {
    headers: { 'Accept': 'text/html' }
  });
  assert.equal(res.status, 200);
  const text = await res.text();
  assert.ok(text.includes('<!DOCTYPE html>'));
  assert.ok(text.includes('Naveen Kumar'));
});

test('GET /docs returns the interactive documentation explorer HTML', async () => {
  const res = await fetch(`${baseUrl}/docs`);
  assert.equal(res.status, 200);
  const text = await res.text();
  assert.ok(text.includes('<!DOCTYPE html>'));
});

test('GET /api/v1 returns root directory map including academics', async () => {
  const res = await fetch(`${baseUrl}/api/v1`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.endpoints.profile);
  assert.ok(data.endpoints.skills);
  assert.ok(data.endpoints.projects);
  assert.ok(data.endpoints.academics);
});

test('GET /api/v1/profile returns Naveen Kumar details with response headers', async () => {
  const res = await fetch(`${baseUrl}/api/v1/profile`);
  assert.equal(res.status, 200);
  assert.ok(res.headers.get('x-response-time'));
  assert.ok(res.headers.get('ratelimit-limit'));
  const body = await res.json();
  assert.equal(body.success, true);
  assert.equal(body.data.name, 'Naveen Kumar');
  assert.equal(body.data.email, 'sde.naveenkumar@gmail.com');
  assert.equal(body.data.title, 'Software Development Engineer (SDE)');
});

test('GET /api/v1/academics/summary returns Manipal University 8.82 CGPA & Distinction', async () => {
  const res = await fetch(`${baseUrl}/api/v1/academics/summary`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.equal(data.data.summary.overallCGPA, 8.82);
  assert.equal(data.data.summary.academicStanding, 'Distinction');
  assert.equal(data.data.institution.name, 'Manipal University Jaipur');
  assert.equal(data.data.institution.rollNumber, '2414XXXXXX');
});

test('GET /api/v1/academics/semesters/4 returns Semester-4 grades with Java and System Software', async () => {
  const res = await fetch(`${baseUrl}/api/v1/academics/semesters/4`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.data.semester, 4);
  assert.equal(data.data.sgpa, 8.1);
  assert.ok(data.data.courses.some(c => c.code === 'DCA2202' && c.name === 'Java Programming'));
  assert.ok(data.data.courses.some(c => c.code === 'DCA2231' && c.total === 100));
});

test('GET /api/v1/academics/courses supports grade and search filtering', async () => {
  const resAPlus = await fetch(`${baseUrl}/api/v1/academics/courses?grade=A%2B`);
  assert.equal(resAPlus.status, 200);
  const dataAPlus = await resAPlus.json();
  assert.ok(dataAPlus.count > 0);
  assert.ok(dataAPlus.data.every(c => c.grade === 'A+'));

  const resJava = await fetch(`${baseUrl}/api/v1/academics/courses?q=Java`);
  assert.equal(resJava.status, 200);
  const dataJava = await resJava.json();
  assert.ok(dataJava.data.some(c => c.name.includes('Java')));
});

test('GET /api/v1/education shows single Manipal University BCA degree with 8.82 CGPA', async () => {
  const res = await fetch(`${baseUrl}/api/v1/education`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.count, 1);
  assert.equal(data.data[0].institution, 'Manipal University Jaipur');
  assert.equal(data.data[0].overallCGPA, 8.82);
});

test('GET /api/v1/socials lists GitHub @sdenaveenkumar, LinkedIn, WhatsApp, Instagram', async () => {
  const res = await fetch(`${baseUrl}/api/v1/socials`);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.ok(Array.isArray(data.data));
  assert.ok(data.data.some(s => s.username === 'sdenaveenkumar' && s.platform === 'WhatsApp'));
  assert.ok(data.data.some(s => s.username === 'sdenaveenkumar' && s.platform === 'Instagram'));
});

test('POST /api/v1/contact validates payload and records message', async () => {
  const resBad = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '' })
  });
  assert.equal(resBad.status, 400);

  const resGood = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Tech Lead',
      email: 'lead@manipal-partners.io',
      subject: 'Collaboration',
      message: 'Great work on your personal API and academic ledger!'
    })
  });
  assert.equal(resGood.status, 201);
});

test('Observability: X-Request-Id is generated and propagated for distributed tracing', async () => {
  // Test 1: Automatically generated UUID
  const res1 = await fetch(`${baseUrl}/health`);
  assert.equal(res1.status, 200);
  const reqId1 = res1.headers.get('x-request-id');
  assert.ok(reqId1, 'X-Request-Id header must be present');
  // Check UUID format (8-4-4-4-12 hex characters)
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  assert.ok(uuidRegex.test(reqId1), 'X-Request-Id must be a valid UUID');

  // Test 2: Custom Request ID is preserved
  const customId = 'trace-id-portfolio-12345';
  const res2 = await fetch(`${baseUrl}/api/v1/profile`, {
    headers: { 'X-Request-Id': customId }
  });
  assert.equal(res2.status, 200);
  assert.equal(res2.headers.get('x-request-id'), customId, 'Custom X-Request-Id must be propagated');
});

test('Security: Headers verify server cloaking, permissions policy, and no-sniff', async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('x-powered-by'), null, 'X-Powered-By header must be disabled to prevent fingerprinting');
  assert.ok(res.headers.get('permissions-policy'), 'Permissions-Policy header must be present');
  assert.equal(res.headers.get('x-content-type-options'), 'nosniff');
});

test('Security: Honeypot bot protection rejects automated spam', async () => {
  const resHoneypot = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Spam Bot',
      email: 'bot@spam.com',
      message: 'Buy crypto now',
      _gotcha: 'http://spam.io'
    })
  });
  assert.equal(resHoneypot.status, 400);
  const data = await resHoneypot.json();
  assert.equal(data.error.code, 'BOT_DETECTED');
});

test('Security: Contact endpoint sanitizes HTML tags and control characters', async () => {
  const res = await fetch(`${baseUrl}/api/v1/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: '<script>alert("XSS")</script>Naveen Fan',
      email: 'secure.fan@manipal.edu',
      subject: '<b>Hi</b>',
      message: 'Hello <img src=x onerror=alert(1)> from client!'
    })
  });
  assert.equal(res.status, 201);
  const data = await res.json();
  assert.equal(data.data.name, 'Naveen Fan', 'Script tags must be stripped');
  assert.equal(data.data.subject, 'Hi', 'HTML tags must be stripped');
  assert.ok(!data.data.message.includes('<img'), 'Image/XSS tags must be stripped');
});
