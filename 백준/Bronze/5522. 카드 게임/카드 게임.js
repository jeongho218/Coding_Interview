let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input.map((v) => Number(v)).reduce((acc, cur) => (acc += cur)));