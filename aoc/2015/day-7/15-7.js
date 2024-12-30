'use strict';
// 2024-12-27 15:58:20
// https://adventofcode.com/2015/day/7
import { getFilePath, summonTheFile } from '../../util/util.js';

const inputFile = 'sample.txt';
const filePath = getFilePath(import.meta.url, inputFile);
const fileContents = await summonTheFile(filePath);

const tokens = {
  AND: '&',
  OR: '|',
  LSHIFT: '<<',
  RSHIFT: '>>',
  NOT: '~',
};

const repRegex = new RegExp(/([a-z]+)/g);
const assign = ' -> ';
const matchRegex = new RegExp(/(AND|OR|RSHIFT|LSHIFT|NOT)/g);

var values = fileContents.split('\n').filter((l) => l.trim().length > 0);

var g = {};
g.run = function (gate) {
  if (typeof g[gate] === 'function') {
    g[gate] = g[gate]();
  }
  return g[gate];
};

for (var i = 0; i < values.length; i++) {
  var [op, target] = values[i].split(assign);

  g[target] = (() => {
    var oper = op
      .replace(matchRegex, (op) => tokens[op] || '')
      .replace(repRegex, "run('$1')");
    return new Function('run', `return (${oper}) & 0xffff;`).bind(null, g.run);
  })();
}
console.log(g.run('a'));
// g.a = () => 0;
// g.b = () => 49625;
// console.log(g.run('b'));

// p1 - 41065
