let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, m] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));

let result = '';
let arrA = input.splice(0, n).map((v) => v.split(' ').map((v) => Number(v)));
let arrB = input.map((v) => v.split(' ').map((v) => Number(v)));

arrA.forEach((v, i) => {
  v.forEach((w, j) => {
    result += `${w + arrB[i][j]} `;
  });
  result += `\n`;
});

console.log(result);