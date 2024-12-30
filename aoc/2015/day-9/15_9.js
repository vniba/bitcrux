'use strict';
// 2024-12-28 14:45:24
// https://adventofcode.com/2015/day/9
import { getFilePath, summonTheFile } from '../../util/util.js';

const inputFile = 'sample.txt';
const filePath = getFilePath(import.meta.url, inputFile);
const fileContents = await summonTheFile(filePath);

(() => {
  const values = fileContents.split('\n').map((v) => v.trim());
  console.log(values);
})();

//
