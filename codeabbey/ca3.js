'use strict';

import { cat3 } from './sample.js';

// 2024-12-31 12:48:14
// https://www.codeabbey.com/index/task_view/sums-in-loop

const input = function () {
  return cat3;
};

const values = input().split('\n');

function output() {
  const sum = [];
  const [len, ...rest] = values;
  for (let i = 0; i < len; i++) {
    const val = rest[i].split(' ');

    sum.push(calSum(val));
  }
  return sum.join(' ');
}

function calSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
}
output();
console.log(output());
// 31549
