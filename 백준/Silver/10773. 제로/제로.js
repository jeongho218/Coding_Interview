let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

input.shift();
let result = [];
for (i = 0; i < input.length; i++) {
  if (input[i] !== 0) {
    result.push(input[i]);
  } else {
    result.pop();
  }
}

if (result.length === 0) {
  console.log(0);
} else {
  console.log(result.reduce((acc, cur) => (acc += cur)));
}
