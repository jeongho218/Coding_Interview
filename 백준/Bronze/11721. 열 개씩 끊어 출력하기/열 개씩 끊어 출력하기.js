let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
while (input.length >= 10) {
  word = '';
  word = input.slice(0, 10);
  input = input.slice(10);
  console.log(word);
}

console.log(input);