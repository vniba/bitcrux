'use strict';

// 2025-01-02 21:21:18
// https://www.codeabbey.com/index/task_view/linear-function

import { cat10 } from './sample.js';
const input = function () {
  return cat10;
};

const values = input().split('\n');
const [n, ...ar] = values;

function output() {
  const out = [];

  for (let i = 0; i < n; i++) {
    const points = ar[i].split(' ').map((v) => +v);
    const cord = `(${linearEquation(...points).join(' ')})`;
    out.push(cord);
  }

  return out.join(' ');
}

function linearEquation(...points) {
  const [x1, y1, x2, y2] = points;

  const a = (y2 - y1) / (x2 - x1);
  const b = y1 - a * x1;

  return [a, b];
}

console.log(output());
