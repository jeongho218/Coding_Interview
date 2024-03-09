let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let [arr] = input.map((v) => v.split(" ").map((w) => Number(w)));

arr = arr.sort((a, b) => a - b);
console.log(
  arr.reduce((acc, cur, idx) => {
    return (acc += arr.slice(0, idx + 1).reduce((inAcc, inCur) => {
      return (inAcc += inCur);
    }, 0));
  }, 0)
);
