let fs = require("fs");
let input = BigInt(fs.readFileSync("/dev/stdin"));

console.log((input * input * input).toString());
console.log(3);
