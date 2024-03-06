let fs = require("fs");
let [a, b] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

let gcd = Math.min(a, b);
while (!(a % gcd === 0 && b % gcd === 0)) {
  gcd--;
}

console.log(gcd);
console.log((a * b) / gcd);