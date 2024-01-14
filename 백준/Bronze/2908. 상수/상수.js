let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(
  input
    .map((v) => parseInt(v.split('').reverse().join('')))
    .sort((a, b) => b - a)[0],
);