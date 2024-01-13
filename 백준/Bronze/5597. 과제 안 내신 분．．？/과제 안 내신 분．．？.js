let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input = input.map((v) => Number(v));
let result = '';
for (i = 1; i <= 30; i++) {
  input.includes(i) ? true : (result += `${i}\n`);
}
console.log(result);