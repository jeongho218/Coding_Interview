let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => BigInt(v));
console.log((input[0] + input[1]).toString());