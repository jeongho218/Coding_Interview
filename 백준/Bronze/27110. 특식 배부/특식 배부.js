let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const abc = input[0].split(' ').map((v) => Number(v));

console.log(
  abc.reduce((acc, cur) => {
    return cur < N ? (acc += cur) : cur >= N ? (acc += N) : acc;
  }, 0),
);