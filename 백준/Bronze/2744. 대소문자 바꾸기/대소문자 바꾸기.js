let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
console.log(
  input
    .map((v) => (v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
    .join(''),
);