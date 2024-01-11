let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.forEach((v) => {
  v.includes('S') ? console.log(v) : v;
});