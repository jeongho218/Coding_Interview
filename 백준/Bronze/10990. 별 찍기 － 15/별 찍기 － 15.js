let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
for (i = 1; i <= input; i++) {
  if (i === 1) {
    console.log(`${' '.repeat(input - i)}*`);
  } else {
    console.log(`${' '.repeat(input - i)}*${' '.repeat((i - 1) * 2 - 1)}*`);
  }
}