let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let answer = '';
input = input.map((v) => v.split(' ').sort((a, b) => b - a));
for (i = 0; i < input.length; i++) {
  answer += `${input[i][2]}\n`;
}
console.log(answer);
