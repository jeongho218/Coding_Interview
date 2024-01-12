let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [k, n, m] = input.map((v) => Number(v));
if (k * n <= m) {
  console.log(0);
} else {
  console.log(Math.abs(m - k * n));
}