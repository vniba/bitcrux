'use strict';

import { readFile } from 'fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// 2024-12-06 21:34:31
// https://adventofcode.com/2024/day/3

// . -> for matching all
// x[aeiou]y -> match any char b/w
// x[^ae]y -> dont match a and e
// ? -> indicate that the following letter u is optional.
// * -> match all or not match all
// + -> match one or more time
// {n} -> with how many times we want it to occur.
// {n, } -> e, indicate that the following letter e can occur at least 3 times in a row.
// {x,y} -> For example, indicate that the following letter e can only occur between 1 and 3 times in a row.
// { } [ ] / \ + * . $^ | ? -> special to be escaped \
// ^ -> start of the line
// $ -> end
// \w -> is used to find letters, numbers and underscore characters.
// \W ->  used to find characters other than letters, numbers, and underscores.
// \d -> is used to find only number characters.
// \D -> is used to find non-numeric characters.
// \s -> is used to find only space characters.
// \S -> is used to find non-space characters.
/* Lookarounds
If we want the phrase we're writing to come before or after another phrase, we need to "lookaround". Take the next step to learn how to "lookaround".

Positive Lookahead: (?=)
Negative Lookahead: (?!)

Positive Lookbehind: (?<=)
Negative Lookbehind: (?<!)

flags
g -> global
m -> multiline
i -> case insensitve

* -> match all
*? -> stop at first
*/

export function getDirname() {
  const filename = fileURLToPath(import.meta.url);
  return dirname(filename);
}

const i = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
const inputFile = 'sample.txt';
const filePath = `${getDirname()}/${inputFile}`;
const fileContents = await readFile(filePath).then((v) => v.toString());

const regex = new RegExp(
  /(?<=\mul\()\d+,\d+,\d+(?=\))|(?<=\mul\()\d+,\d+(?=\))/,
  'g'
);

async function main() {
  const one = fileContents.split('\n').join();
  const array = [...one.matchAll(regex)].map((v) => v[0]);
  const mapped = array
    .map((val) => val.split(',').reduce((acc, cur) => acc * cur, 1))
    .reduce((acc, cur) => acc + cur, 0);
  console.log(mapped);
}
main();
// ans: 175700056 (first try lol)
