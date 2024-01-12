let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = '';
input.shift();
input
  .sort((a, b) => a - b)
  .forEach((v) => {
    result += `${v}\n`;
  });
console.log(result);