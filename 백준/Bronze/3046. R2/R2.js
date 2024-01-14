let fs = require('fs');
let [a, 평균] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));
console.log(평균 * 2 - a);