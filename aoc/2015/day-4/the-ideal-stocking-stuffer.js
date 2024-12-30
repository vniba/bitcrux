'use strict';
// 2024-12-27 10:48:13
// https://adventofcode.com/2015/day/4
import { isMainThread, Worker, workerData } from 'node:worker_threads';
import { getFilePath, md5, summonTheFile } from '../../util/util.js';

const inputFile = 'sample.txt';
const cufileName = 'the-ideal-stocking-stuffer.js';
const filePath = getFilePath(import.meta.url, inputFile);
const fileContents = await summonTheFile(filePath);
const zeroLen = 6;
const zeros = '000000';
const max = 10000000;

function matchHash(start, end) {
  for (let index = start; index < end; index++) {
    const hash = md5(fileContents + index);
    if (hash.substring(0, zeroLen) === zeros) {
      console.log(hash, index);
      return index;
    }
  }
}

const threads = new Set();
function splitToParts(num, threadCount = 1) {
  const parts = [];
  const chunkSize = Math.ceil(num / threadCount);

  for (let index = 0; index < num; index += chunkSize) {
    const end = Math.min(index + chunkSize, num);
    parts.push({ start: index, end });
  }
  return parts;
}

if (isMainThread) {
  const result = [];
  const parts = splitToParts(max, 10).toSorted((a, b) => a - b);
  for (const p of parts) {
    threads.add(
      new Worker(getFilePath(import.meta.url, cufileName), {
        workerData: p,
      })
    );
  }
  threads.forEach((thread) => {
    thread.on('error', (err) => {
      throw err;
    });
    thread.on('exit', () => {
      threads.delete(thread);
      console.log(`Thread exiting, ${threads.size} running...`);
    });
    thread.on('message', (msg) => {
      result.push(msg);
    });
  });
  console.log(result);
} else {
  matchHash(workerData.start, workerData.end);
}
// main();
// p1 - 346386
// p2 - 9958218
