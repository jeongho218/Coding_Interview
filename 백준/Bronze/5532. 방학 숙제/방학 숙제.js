let fs = require('fs');
let [L, A, B, C, D] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

let arr = [B / D, A / C];
console.log(L - Math.ceil(Math.max(...arr)));