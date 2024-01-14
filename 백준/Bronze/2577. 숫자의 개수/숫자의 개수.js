let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .reduce((acc, cur) => (acc *= cur))
  .toString();

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (i = 0; i <= input.length - 1; i++) {
  arr[input[i]] += 1;
}
arr.forEach((v) => console.log(v));