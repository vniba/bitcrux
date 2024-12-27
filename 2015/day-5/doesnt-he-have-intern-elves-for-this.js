'use strict';
// 2024-12-27 12:46:47
// https://adventofcode.com/2015/day/5
import { getFilePath, summonTheFile } from '../../util/util.js';

const inputFile = 'sample.txt';
const filePath = getFilePath(import.meta.url, inputFile);
const fileContents = await summonTheFile(filePath);

const noOfVowelToMatched = 3;
const vowRegex = new RegExp(/[aeiou]/g);
const noCharRegex = new RegExp(/(xy)|(ab)|(cd)|(pq)/g);
const repeatCharRegex = new RegExp(/(.)\1/g);

function main() {
  const values = fileContents.split('\n');

  let match = 0;
  for (const str of values) {
    const matchNonChar = [...str.matchAll(noCharRegex)];

    if (matchNonChar.length > 0) {
      continue;
    }
    const matchVowel = [...str.matchAll(vowRegex)];
    const matchReapetChar = [...str.matchAll(repeatCharRegex)];

    if (matchVowel.length >= noOfVowelToMatched && matchReapetChar.length > 0) {
      match++;
    }
  }
  console.log(match);
  return match;
}
main();
// p1 - 236
