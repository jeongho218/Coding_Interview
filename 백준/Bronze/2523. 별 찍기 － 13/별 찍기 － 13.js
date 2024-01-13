let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
for (i = 1; i <= input; i++) {
  console.log(`${'*'.repeat(i)}`);
}
for (i = input - 1; i >= 1; i--) {
  console.log(`${'*'.repeat(i)}`);
}