let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.forEach((v) => {
  console.log(v[0] + v[v.length - 1]);
});
