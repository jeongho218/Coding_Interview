let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input;
console.log(a[Number(b) - 1]);
