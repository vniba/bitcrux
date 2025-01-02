'use strict';

import { cat9 } from './sample.js';
// 2025-01-02 21:12:31
// https://www.codeabbey.com/index/task_view/triangles
const input = function () {
  return cat9;
};

const values = input().split('\n');
const [n, ...ar] = values;

function output() {
  const out = [];

  for (let i = 0; i < n; i++) {
    const [a, b, c] = ar[i].split(' ').map((v) => +v);
    out.push(areaFoTriangle(a, b, c));
  }

  return out.join(' ');
}

function areaFoTriangle(a, b, c) {
  const s = 0.5 * (a + b + c);
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return Number.isNaN(area) ? 0 : 1;
}

console.log(output());
