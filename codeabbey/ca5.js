'use strict';

import { cat4 } from './sample.js';

// 2024-12-31T08:30:05Z
// https://www.codeabbey.com/index/task_view/sums-in-loop

const input = function () {
  return cat4;
};

const values = input().split('\n');

function output() {
  const min = [];
  const [len, ...rest] = values;
  for (let i = 0; i < len; i++) {
    const val = rest[i].split(' ');

    min.push(calMin(val));
  }
  return min.join(' ');
}

function calMin(arr) {
  return Math.min(...arr);
}
output();
console.log(output());
// 31549
