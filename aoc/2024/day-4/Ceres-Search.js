'use strict';
// 2024-12-07 13:07:01
// https://adventofcode.com/2024/day/4
import { readFile } from 'fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export function getDirname() {
  const filename = fileURLToPath(import.meta.url);
  return dirname(filename);
}

const inputFile = 'sample.txt';
const filePath = `${getDirname()}/${inputFile}`;
const fileContents = await readFile(filePath).then((v) => v.toString());

function ceresSearch() {
  const one = fileContents.split('\n').join();
  const rows = one.length;
  const n = one[0].length;
  for (let i = 0; i < rows; i++) {
    for (let index = 0; index < n.length; index++) {
      console.log(index, i);
    }
  }
}

function count(rows, r, c) {
  if (rows[r][c] === 'X') return 0;

  return 1;
}

ceresSearch();
