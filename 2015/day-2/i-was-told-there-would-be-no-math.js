'use strict';

import { getFilePath, summonTheFile } from '../../util/util.js';

// 2024-12-10 19:10:55
// https://adventofcode.com/2015/day/2

const surBase = 2;

const inputFile = 'sample.txt';
const filePath = getFilePath(import.meta.url, inputFile);
const fileContents = await summonTheFile(filePath);

function main() {
  const areas = make2DArray(fileContents);
  let totalSqft = 0;
  for (const area of areas) {
    totalSqft += calculateComboAreas(area);
  }
  console.log(totalSqft);
}
main();

function make2DArray(fileContents) {
  return fileContents.split('\n').map((s) => s.split('x').map((v) => +v));
}

function calculateComboAreas(list) {
  let totalSqft = 0;
  let smallArea = Infinity;

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const area = list[i] * list[j];

      if (area < smallArea) {
        smallArea = area;
      }
      totalSqft += area * surBase;
    }
  }
  return totalSqft + smallArea;
}
// ans: 1598415
