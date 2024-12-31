'use strict';

import { cat7 } from './sample.js';

// https://www.codeabbey.com/index/task_view/fahrenheit-celsius
// https://www.wikiwand.com/en/articles/Fahrenheit
const input = function () {
  return cat7;
};

const [n, ...values] = input().split(' ');

function output() {
  const cel = [];
  for (let i = 0; i < n; i++) {
    cel.push(toFahrenheit(+values[i]));
  }
  return cel.join(' ');
}

function toFahrenheit(f) {
  return Math.round((f - 32) * (5 / 9));
}

output();
console.log(output());
// -2351 0 -18759 12367 19379 -1335 -2908 0 -12830 15941 -9162 697
