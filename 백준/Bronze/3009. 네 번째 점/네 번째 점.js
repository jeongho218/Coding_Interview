let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

let x = [];
let y = [];
input.forEach((v) => x.push(v[0]) && y.push(v[1]));

let forCompare = input.map((v) => v.join(""));

for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    if (!forCompare.includes([x[i], y[j]].join(""))) {
      console.log(x[i], y[j]);
    }
  }
}
