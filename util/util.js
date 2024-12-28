'use strict';
import { readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

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

export function md5(val) {
  return crypto
    .createHash('md5', { encoding: 'utf-8' })
    .update(val)
    .digest('hex');
}

export function sumOfNumbers(numbers) {
  let t = 0;
  for (let i = 0; i < numbers.length; i++) {
    t += numbers[i];
  }
  return t;
}

export function convertHexToStr(val) {
  return String.fromCharCode(parseInt(val, 16));
}
