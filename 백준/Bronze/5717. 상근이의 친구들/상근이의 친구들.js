let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
input
  .map((v) => v.split(' '))
  .forEach((w) => console.log(Number(w[0]) + Number(w[1])));
