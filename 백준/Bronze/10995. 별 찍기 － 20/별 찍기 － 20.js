let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
for (i = 1; i <= input; i++) {
  console.log(`${i % 2 !== 0 ? '* '.repeat(input) : ' *'.repeat(input)}`);
}