let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v))
  .sort((a, b) => a - b);

console.log(input.reduce((acc, cur) => (acc += cur)) / 5);
console.log(input[2]);