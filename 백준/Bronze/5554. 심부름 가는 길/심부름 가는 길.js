let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .reduce((acc, cur) => (acc += Number(cur)), 0);

console.log(Math.floor(input / 60));
console.log(input % 60);