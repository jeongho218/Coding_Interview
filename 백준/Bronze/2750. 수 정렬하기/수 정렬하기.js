let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input
  .sort((a, b) => a - b)
  .forEach((v) => {
    console.log(v);
  });