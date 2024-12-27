'use strict';
// 2024-12-11 20:06:07
// https://adventofcode.com/2015/day/3
import { getFilePath, summonTheFile } from '../../util/util.js';

const inputFile = 'sample.txt';
const filePath = getFilePath(import.meta.url, inputFile);
const fileContents = await summonTheFile(filePath);

const dir = { v: [0, -1], '^': [0, 1], '<': [-1, 0], '>': [1, 0] };

function main() {
  let x = 0;
  let y = 0;
  const start = new Set([x, y].join(','));
  for (const move of fileContents) {
    x += dir[move][0];
    y += dir[move][1];
    start.add([x, y].join(','));
  }
  console.log(start.size);
}
main();
// 2567 -2
