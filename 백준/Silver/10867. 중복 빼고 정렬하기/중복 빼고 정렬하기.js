let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let result = [];
input[0]
  .split(' ')
  .map((v) => Number(v))
  .sort((a, b) => a - b)
  .filter((v, i) => (result.includes(v) ? v : result.push(v)));

console.log(result.join(' '));