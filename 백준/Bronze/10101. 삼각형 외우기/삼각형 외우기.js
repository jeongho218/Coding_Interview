let fs = require('fs');
let [a, b, c] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

console.log(
  a + b + c !== 180
    ? 'Error'
    : a === 60 && b === 60 && c === 60
      ? 'Equilateral'
      : a !== b && a !== c && b !== c
        ? 'Scalene'
        : 'Isosceles',
);