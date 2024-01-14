let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = [];
input.forEach((v) => {
  r = v % 42;
  arr.includes(r) ? r : arr.push(r);
});

console.log(arr.length);