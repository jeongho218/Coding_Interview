let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
input.forEach((v) => {
  let [a, b] = v.split(' ').map((w) => Number(w));
  console.log(a > b ? 'Yes' : 'No');
});