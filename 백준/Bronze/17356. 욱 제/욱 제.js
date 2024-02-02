let fs = require("fs");
let [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let M = (B - A) / 400;
console.log(1 / (1 + 10 ** M));