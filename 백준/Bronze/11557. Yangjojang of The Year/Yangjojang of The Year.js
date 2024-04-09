let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let answer = '';

while (input.length > 0) {
  let arr = input.splice(0, Number(input[0]) + 1);
  arr.shift();
  answer += `${
    arr.map((v) => v.split(' ')).sort((a, b) => b[1] - a[1])[0][0]
  }\n`;
}

console.log(answer);