let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
console.log(
  input[0]
    .split('')
    .map((v) => Number(v))
    .reduce((acc, cur) => (acc += cur)),
);