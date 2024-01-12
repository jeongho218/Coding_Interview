let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(
  input.reduce((acc, cur) => {
    return (acc += cur ** 2);
  }, 0) % 10,
);