let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let target = Number(input[0]);
console.log(
  input[1].split(' ').reduce((acc, cur) => {
    return cur == target ? (acc += 1) : acc;
  }, 0),
);