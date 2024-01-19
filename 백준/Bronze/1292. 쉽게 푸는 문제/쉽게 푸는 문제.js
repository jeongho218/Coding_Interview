let fs = require('fs');
let [a, b] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

let arr = [];
for (i = 1; i <= 45; i++) {
  for (j = 1; j <= i; j++) {
    arr.push(i);
  }
}

let result = [];
for (k = a; k <= b; k++) {
  result.push(arr[k - 1]);
}
console.log(result.reduce((acc, cur) => (acc += cur)));