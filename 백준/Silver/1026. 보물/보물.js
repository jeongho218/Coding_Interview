let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let [A, B] = input.map((v) => v.split(" ").map((w) => Number(w)));

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

console.log(
  A.reduce((acc, cur, index) => {
    return (acc += cur * B[index]);
  }, 0)
);