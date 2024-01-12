let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input.map((v) => Number(v));
console.log(a + b);