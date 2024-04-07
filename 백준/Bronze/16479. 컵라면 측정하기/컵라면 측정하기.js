let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let k = input.shift();
let [d1, d2] = input[0].split(" ").sort();

console.log(k ** 2 - ((d1 - d2) / 2) ** 2);