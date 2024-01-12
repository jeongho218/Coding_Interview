let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
let result = '';
for (i = 1; i <= input; i++) {
  result += `${i}\n`;
}

console.log(result);