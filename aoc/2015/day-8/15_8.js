'use strict';
// 2024-12-27 18:52:55
// https://adventofcode.com/2015/day/8
import { getFilePath, summonTheFile } from '../../util/util.js';

const inputFile = 'sample.txt';
const filePath = getFilePath(import.meta.url, inputFile);
const fileContents = await summonTheFile(filePath);

(() => {
  const values = fileContents.split('\n').map((v) => v.trim());

  let strLength = 0;
  let memoryStrLenP1 = 0;
  let memoryStrLenP2 = 0;
  for (const value of values) {
    const strLen = value.length;
    const newLen = eval(value).length;
    const p2Len = JSON.stringify(value).length;

    // mine :lol
    // const newStr = value
    //   .slice(1, value.length - 1)
    //   .replace(/\\"/g, '"')
    //   .replace(/\\\\/g, '\\')
    //   .replace(/\\x([0-9A-Fa-f]{2})/g, (_, hex) => {
    //     return convertHexToStr(hex);
    //   });
    strLength += strLen;
    // memoryStrLen += newStr.length;
    memoryStrLenP1 += newLen;
    memoryStrLenP2 += p2Len;
  }
  console.log(
    Math.abs(strLength - memoryStrLenP1),
    Math.abs(strLength - memoryStrLenP2)
  );
})();

// p1 - 1350
// p2 - 2085
