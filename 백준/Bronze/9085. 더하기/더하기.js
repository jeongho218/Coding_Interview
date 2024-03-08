let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let result = "";
input.map((v, i) =>
  i % 2 !== 0
    ? (result += `${v
        .split(" ")
        .reduce((acc, cur) => (acc += Number(cur)), 0)}\n`)
    : v
);

console.log(result);
