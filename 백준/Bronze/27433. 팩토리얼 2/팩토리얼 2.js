let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
let result = 1;
if (input == 0) console.log(1);
else {
  for (i = input; i >= 1; i--) {
    result *= i;
  }
  console.log(result);
}