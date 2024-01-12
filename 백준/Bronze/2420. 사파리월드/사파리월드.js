let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

if (a >= 0) {
  if (b >= 0) {
    console.log(Math.abs(a - b));
  } else if (b < 0) {
    console.log(Math.abs(b - a));
  }
} else if (a < 0) {
  if (b >= 0) {
    console.log(Math.abs(b - a));
  } else if (b < 0) {
    console.log(Math.abs(a - b));
  }
}