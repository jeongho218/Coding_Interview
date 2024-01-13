let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = '';
input.forEach((v) => {
  let [a, b] = v.split(' ').map((v) => Number(v));
  result += `${a + b}\n`;
});

console.log(result);