let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const divide = input[0];
let arr = input[1]
  .split(' ')
  .map((v) => Number(v))
  .sort((a, b) => b - a);

console.log(
  arr.reduce((acc, cur) => {
    return (acc += (cur / arr[0]) * 100);
  }, 0) / divide,
);