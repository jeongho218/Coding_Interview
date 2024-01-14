let fs = require('fs');
let [a, b] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => BigInt(v));
console.log((a + b).toString());