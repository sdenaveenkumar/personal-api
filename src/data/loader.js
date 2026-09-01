import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readJsonFile(filename) {
  const filePath = path.join(__dirname, filename);
  const rawData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(rawData);
}

export const profileData = readJsonFile('profile.json');
export const academicsData = readJsonFile('academics.json');
export const openApiSpec = readJsonFile('openapi.json');
