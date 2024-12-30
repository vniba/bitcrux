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
  let count = 0;

  for (const row of valus) {
    if (!row.length) continue;

    const safePos = new Set([1, 2, 3]);
    const safeNeg = new Set([-1, -2, -3]);

    loopMe(safePos, safeNeg, row);

    if (isSafe(safePos, safeNeg)) {
      count += 1;
    } else {
      count += isSafeP2(row, count);
    }
  }

  console.log(count);
  return count;
}
// ans p1: 680
// ans p2: 710
main();

function loopMe(safePos, safeNeg, row) {
  for (let index = 0; index < row.length - 1; index++) {
    // if any other value added that must be not in the safe set so
    safePos.add(row[index] - row[index + 1]);
    safeNeg.add(row[index] - row[index + 1]);
  }
}

function isSafe(safePos, safeNeg) {
  return safePos.size === 3 || safeNeg.size === 3;
}

export function makeCombination(row) {
  const comp = [];
  for (let index = 0; index < row.length; index++) {
    comp.push(row.toSpliced(index, 1));
  }
  return comp;
}

function isSafeP2(row) {
  const comps = makeCombination(row);
  let count = 0;
  for (const com of comps) {
    const safePos = new Set([1, 2, 3]);
    const safeNeg = new Set([-1, -2, -3]);
    loopMe(safePos, safeNeg, com);
    if (isSafe(safePos, safeNeg)) {
      count += 1;
      break;
    }
  }
  return count;
}
