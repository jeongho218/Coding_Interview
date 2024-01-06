let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

console.log((a / b).toString());
console.log((a % b).toString());