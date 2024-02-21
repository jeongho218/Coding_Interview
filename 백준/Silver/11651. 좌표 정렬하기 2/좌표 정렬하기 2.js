let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let arr = input
  .map((v) => v.split(' ').map((w) => Number(w)))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let result = '';
arr.forEach((v) => (result += `${v[0]} ${v[1]}\n`));

console.log(result);