let fs = require('fs');
let [x, y] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let correct = x
  .split(' ')
  .map((v) => Number(v))
  .reduce((acc, cur) => acc * cur);

console.log(
  y
    .split(' ')
    .map((v) => {
      n = Number(v);
      return correct === n ? 0 : n - correct;
    })
    .join(' '),
);