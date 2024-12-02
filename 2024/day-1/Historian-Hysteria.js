'use strict';
import { readFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

function getDirname() {
  const filename = fileURLToPath(import.meta.url);
  return dirname(filename);
}
const inputFile = 'input.txt';
const filePath = `${getDirname()}/${inputFile}`;

async function main() {
  try {
    const firstCol = [];
    const secondCol = [];

    const file = (await readFile(filePath)).toString();

    file.split('\n').map((val) => {
      const trimmedLine = val.trim();
      const [f, s] = trimmedLine.split(/\s+/);
      if (f) {
        firstCol.push(+f);
      }
      if (s) {
        secondCol.push(+s);
      }
    });

    const sortedFirstCol = firstCol.toSorted();
    const sortedSecondCol = secondCol.toSorted();
    let sum = 0;

    for (let index = 0; index < sortedFirstCol.length; index++) {
      sum += Math.abs(sortedFirstCol[index] - sortedSecondCol[index]);
    }
    console.log(sum, 'sum');
  } catch (error) {
    console.error(error);
  }
}
// ans  : 2815556

main();
