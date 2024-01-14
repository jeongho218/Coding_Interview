let fs = require('fs');
let [a, b] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));
console.log((a + b) * (a - b));