let fs = require("fs");
let [m, n] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

let arr = [];

for (i = m; i <= n; i++) {
  let x = Math.sqrt(i);
  if (x === Math.floor(x)) {
    arr.push(i);
  }
}

if (arr.length > 0) {
  console.log(arr.reduce((acc, cur) => (acc += cur), 0));
  console.log(arr[0]);
} else {
  console.log(-1);
}