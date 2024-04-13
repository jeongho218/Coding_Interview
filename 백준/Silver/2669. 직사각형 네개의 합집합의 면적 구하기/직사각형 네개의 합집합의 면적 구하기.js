let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = Array(101)
  .fill(0)
  .map(() => Array(101).fill(0));

for (i = 0; i < input.length; i++) {
  let [xMin, yMin, xMax, yMax] = input[i].split(" ").map((v) => Number(v));
  for (j = xMin; j < xMax; j++) {
    for (k = yMin; k < yMax; k++) {
      arr[j][k] = 1;
    }
  }
}

console.log(
  arr.reduce((exAcc, exCur) => {
    return (exAcc += exCur.reduce((acc, cur) => {
      return (acc += cur);
    }, 0));
  }, 0)
);