let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.forEach((v) => {
  let [a, b] = v.split(',');
  console.log(Number(a) + Number(b));
});