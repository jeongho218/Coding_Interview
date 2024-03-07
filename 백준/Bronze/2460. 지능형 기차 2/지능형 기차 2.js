let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => Number(v)));

let result = 0;
let passanger = 0;
input.forEach((v) => {
  passanger = passanger - v[0] + v[1];
  return passanger > result ? (result = passanger) : result;
});

console.log(result);
