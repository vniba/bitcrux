import { readFile } from 'node:fs/promises';

export function readFilee(file) {
  return readFile(file).toString();
}
