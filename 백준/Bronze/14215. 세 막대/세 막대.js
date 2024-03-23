let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => b - a);

if (input[0] < input[1] + input[2]) {
  console.log(input.reduce((acc, cur) => (acc += cur)));
} else {
  console.log(input[1] + input[2] + (input[1] + input[2] - 1));
}
