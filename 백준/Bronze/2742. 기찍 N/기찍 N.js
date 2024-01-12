let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
let result = '';
for (i = input; i > 0; i--) {
  result += `${i}\n`;
}
console.log(result);