let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
for (i = input; i > 0; i--) {
  console.log('*'.repeat(i));
}