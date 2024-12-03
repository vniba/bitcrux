'use strict';
// https://adventofcode.com/2024/day/

import { readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

function getDirname() {
  const filename = fileURLToPath(import.meta.url);
  return dirname(filename);
}
const inputFile = 'sample.txt';
const filePath = `${getDirname()}/${inputFile}`;

async function main() {
  const fileContents = (await readFile(filePath)).toString();

  const valus = [];
  fileContents.split('\n').map((val) => {
    const newVal = val.trim();
    const row = newVal
      .split(/\s/)
      .map((i) => Number.parseInt(i))
      .filter(Boolean);
    valus.push(row);
  });

  const sucess = 0;

  for (const row of valus) {
    const is = row.every((val, i, arr) => {
      return val !== arr[i + 1];
    });
    console.log(is);
  }

  // The levels are either all increasing or all decreasing.
  // Any two adjacent levels differ by at least one and at most three.
}

main();
