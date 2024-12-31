'use strict';

import { cat6 } from './sample.js';

// 2024-12-31T08:30:05Z
// https://www.codeabbey.com/index/task_view/sums-in-loop

const input = function () {
  return cat6;
};

const values = input().split('\n');

function output() {
  const min = [];
  const [len, ...rest] = values;
  for (let i = 0; i < len; i++) {
    const val = rest[i].split(' ');

    min.push(round(val));
  }
  return min.join(' ');
}

function round(arr) {
  return roundHalfAwayFromZero(arr[0] / arr[1]);
}
function roundHalfAwayFromZero(num) {
  if (num > 0) {
    return Math.floor(num + 0.5);
  } else {
    return Math.ceil(num - 0.5);
  }
}

output();
console.log(output());
// -2351 0 -18759 12367 19379 -1335 -2908 0 -12830 15941 -9162 697
