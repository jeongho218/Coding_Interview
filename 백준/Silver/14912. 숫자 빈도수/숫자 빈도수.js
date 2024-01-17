let fs = require('fs');
let [n, d] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));
let count = 0;
for (i = 1; i <= n; i++) {
  i.toString()
    .split('')
    .forEach((v) => (v == d ? ++count : false));
}
console.log(count);