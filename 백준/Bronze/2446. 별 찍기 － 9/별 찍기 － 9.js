let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
for (i = input; i >= 1; i--) {
  if (i !== 1) {
    console.log(`${' '.repeat(input - i)}${'*'.repeat(i * 2 - 1)}`);
  } else {
    console.log(`${' '.repeat(input - i)}${'*'.repeat(i)}`);
  }
}
for (i = 2; i <= input; i++) {
  console.log(`${' '.repeat(input - i)}${'*'.repeat(i * 2 - 1)}`);
}