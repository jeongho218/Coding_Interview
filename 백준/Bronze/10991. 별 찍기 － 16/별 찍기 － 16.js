let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
for (i = 1; i <= input; i++) {
  console.log(`${' '.repeat(input - i)}${'* '.repeat(i)}`);
}