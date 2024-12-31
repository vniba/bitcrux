'use strict';
// 2024-12-31 12:36:11
// https://www.codeabbey.com/index/task_view/sum-in-loop

const input = function () {
  return `47
635 1145 627 513 1005 261 885 111 1165 765 210 506 948 1094 1278 844 1081 508 187 210 469 974 970 629 225 602 988 523 441 886 928 1256 130 114 327 463 726 1074 439 164 1036 330 1042 1179 723 350 583`;
};

const values = input().split('\n');

function output() {
  let sum = 0;
  let arr = values[1].split(' ');
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
}
output();
console.log(output());
// 31549
