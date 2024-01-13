let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .sort((a, b) => a - b);
console.log(input[1]);