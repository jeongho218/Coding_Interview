let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => Number(v));
console.log(
  input.reduce((acc, cur) => {
    return cur < 40 ? (acc += 40) : (acc += cur);
  }, 0) / 5,
);