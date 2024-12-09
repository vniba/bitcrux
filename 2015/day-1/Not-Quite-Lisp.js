'use strinct';
// 2024-12-09 19:44:11
// https://adventofcode.com/2015/day/1

import { readFile } from 'fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
// ( up , ) down

export function getDirname() {
  const filename = fileURLToPath(import.meta.url);
  return dirname(filename);
}

const inputFile = 'sample.txt';
const filePath = `${getDirname()}/${inputFile}`;
const fileContents = await readFile(filePath).then((v) => v.toString().trim());

function main() {
  let ct = 0;

  for (const val of fileContents) {
    val === '(' ? ct++ : ct--;
  }
  console.log(ct);

}
main();
