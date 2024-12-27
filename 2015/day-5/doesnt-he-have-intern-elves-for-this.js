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
  const i = matchP2(values, 0);
  console.log(i);
  return i;
}
main();
// p1 - 236
// p2 - 424 too high

function matchP1(values) {
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
  return match;
}

function matchP2(values) {
  let match = 0;
  for (const str of values) {
    // const matchVowel = [...str.matchAll(vowRegex)];
    // const matchReapetChar = [...str.matchAll(repeatCharRegex)].map((v) => v[0]);

    console.log(makeCombo(str));

    // if (matchReapetChar.length > 0 && hasDuplicate(matchReapetChar)) {
    //   match++;
    // }
  }
  return match;
}

function hasDuplicate(value) {
  const freq = {};
  for (const e of value) {
    freq[e] = (freq[e] || 0) + 1;
  }
  return !!Object.values(freq).filter((v) => v > 1)[0];
}

function makeCombo(val) {
  const compos = new Set();
  let hasDuplicate = false;
  for (let i = 0; i < val.length; i++) {
    for (let j = i + 1; j < val.length; j++) {
      const v1 = val[i];
      const v2 = val[j];
      const v = v1 + v2;
      if (compos.has(v)) {
        hasDuplicate = true;
        continue;
      }
      compos.add(v);
    }
  }
  return hasDuplicate;
}
