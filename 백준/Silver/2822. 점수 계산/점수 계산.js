let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

let answer = [];
let backup = [...input];
let sort = input.sort((a, b) => b - a).filter((v, i) => (i < 5 ? v : false));

for (i = 0; i < 5; i++) {
  answer.push(backup.indexOf(sort[i]) + 1);
}

console.log(sort.reduce((acc, cur) => (acc += cur)));
console.log(answer.sort((a, b) => a - b).join(' '));
