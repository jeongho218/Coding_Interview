let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
if (input[0] !== input[input.length - 1]) {
  return console.log(0);
} else {
  for (i = 0; i < Math.floor(input.length / 2); i++) {
    if (input[i] !== input[input.length - (i + 1)]) {
      return console.log(0);
    }
  }
}
console.log(1);