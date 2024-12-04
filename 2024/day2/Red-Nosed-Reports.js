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

function convertFileTo2DArray(fileContents) {
  const values = [];
  fileContents.split('\n').map((val) => {
    const newVal = val.trim();
    const row = newVal
      .split(/\s/)
      .map((i) => Number.parseInt(i))
      .filter(Boolean);
    values.push(row);
  });
  return values;
}

async function main() {
  const fileContents = (await readFile(filePath)).toString();

  const valus = convertFileTo2DArray(fileContents);
  let sucessPartOne = 0;
  let sucessPartTwo = 0;

  for (const row of valus) {
    if (!row.length) continue;

    const safePos = new Set([1, 2, 3]);
    const safeNeg = new Set([-1, -2, -3]);

    for (let index = 0; index < row.length - 1; index++) {
      // if any other value added that must be not in the safe set so
      safePos.add(row[index] - row[index + 1]);
      safeNeg.add(row[index] - row[index + 1]);
    }

    if (safePos.size === 3 || safeNeg.size === 3) {
      sucessPartOne += 1;
    }
  }

  console.log(sucessPartOne);
  return sucessPartOne;
}
// ans p1: 680
// ans p2: 738 high
main();
