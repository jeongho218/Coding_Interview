let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

console.log(
  input
    .map((v) => v.split(" ").map((v) => Number(v)))
    .reduce((acc, cur) => {
      return (acc += cur[1] % cur[0]);
    }, 0)
);
