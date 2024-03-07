let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

let total = input.shift();
console.log(total - input.reduce((acc, cur) => (acc += cur)));
