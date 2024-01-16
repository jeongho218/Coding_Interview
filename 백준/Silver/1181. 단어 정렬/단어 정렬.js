let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let 처리 = input
  .sort()
  .filter((v, i) => (v === input[i - 1] ? false : v))
  .map((v) => [v, v.length])
  .sort((a, b) => a[1] - b[1])
  .map((v) => v[0]);

처리.forEach((v) => console.log(v));