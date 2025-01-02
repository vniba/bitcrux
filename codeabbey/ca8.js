'use strict';

import { cat8 } from './sample.js';

// https://www.codeabbey.com/index/task_view/arithmetic-progression

const input = function () {
  return cat8;
};

const values = input().split('\n');
const [n, ...ar] = values;

function output() {
  const out = [];

  for (let i = 0; i < n; i++) {
    const [start, diff, n] = ar[i].split(' ').map(v => +v);
    out.push(arithProgressionSum(start, diff, n));
  }
  return out.join(' ');
}

function arithProgressionSum(a1, diff, n) {

  return (n / 2) * (a1 * 2 + (n - 1) * diff)
}

function arithProgressionNth(a1, diff, n) {

  return a1 + (n - 1) * diff;
}
output();
console.log(output());
// -2351 0 -18759 12367 19379 -1335 -2908 0 -12830 15941 -9162 697
