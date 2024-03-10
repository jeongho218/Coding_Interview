let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.pop();

let result = [];
input.split(' ').forEach((v, i) => {
  if (v === '0' && i === 0) {
    result.push(0);
  } else if (v === '1' && i === 0) {
    result.push(1);
  } else if (v === '0') {
    result.push(0);
  } else {
    result.push(result[result.length - 1] + 1);
  }
});

console.log(result.reduce((acc, cur) => (acc += cur)));
