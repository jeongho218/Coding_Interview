let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
a = BigInt(input[0]);
b = BigInt(input[1]);

console.log((a + b).toString());
console.log((a - b).toString());
console.log((a * b).toString());