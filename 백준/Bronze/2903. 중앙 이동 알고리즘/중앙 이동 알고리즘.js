let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
let n = 3;
for (i = 0; i < input; i++) {
  n += 2 ** i;
}
console.log((n - 1) ** 2);