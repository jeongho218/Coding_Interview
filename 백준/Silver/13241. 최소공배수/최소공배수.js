let fs = require('fs');
let [a, b] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v))
  .sort((a, b) => a - b);

if (a === b) {
  console.log(a);
} else {
  let 최대공약수 = a;
  while (!(a % 최대공약수 === 0 && b % 최대공약수 === 0)) {
    최대공약수 -= 1;
  }
  console.log(`${(a * b) / 최대공약수}`);
}