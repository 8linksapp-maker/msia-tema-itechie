import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const DATA_DIR = resolve(process.cwd(), "src/data");
function readData(filename, fallback = {}) {
  try {
    const fullPath = resolve(DATA_DIR, filename);
    const content = readFileSync(fullPath, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.error(`[readData] Erro ao ler ${filename}:`, err.message);
    return fallback;
  }
}

export { readData as r };
