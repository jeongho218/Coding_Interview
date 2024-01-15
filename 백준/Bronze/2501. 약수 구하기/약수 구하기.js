let fs = require('fs');
let [N, K] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

let arr = [];
for (i = 1; i <= N; i++) {
  N % i === 0 ? arr.push(i) : arr;
}
console.log(arr[K - 1] ? arr[K - 1] : 0);