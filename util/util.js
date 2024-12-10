'use strict';
import { readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export async function summonTheFile(file) {
  const fl = await readFile(file);
  return fl.toString().trim();
}

export function getWd(url) {
  const filename = fileURLToPath(url);
  return dirname(filename);
}

export function getFilePath(url, fileName) {
  return `${getWd(url)}/${fileName}`;
}
