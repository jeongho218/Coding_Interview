let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("-");
console.log(input.reduce((acc, cur) => (acc += cur[0]), ""));
