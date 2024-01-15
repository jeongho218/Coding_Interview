let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = b.split(' ').map((v) => Number(v));
let result = [];
arr.forEach((v) => {
  let a = [];
  for (i = 1; i <= v; i++) {
    v % i === 0 ? a.push(i) : i;
  }
  a.length == 2 ? result.push(v) : v;
});
console.log(result.length);