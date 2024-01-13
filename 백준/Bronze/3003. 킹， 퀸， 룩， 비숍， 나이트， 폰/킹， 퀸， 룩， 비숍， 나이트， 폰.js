let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

const normal = [1, 1, 2, 2, 2, 8];
let result = [];

input.forEach((v, i) => {
  v === normal[i]
    ? result.push(0)
    : v < normal[i]
      ? result.push(normal[i] - v)
      : result.push(normal[i] - v);
});

console.log(result.join(' '));