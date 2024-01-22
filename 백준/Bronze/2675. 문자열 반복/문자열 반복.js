let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
let result = '';
for (i = 0; i < input.length; i++) {
  [a, b] = input[i].split(' ');
  for (j = 0; j < b.length; j++) {
    result += b[j].repeat(a);
  }
  result += `\n`;
}

console.log(result);