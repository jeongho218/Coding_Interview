let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let count = input.shift();
for (i = 1; i <= count; i++) {
  let [a, b] = input[i - 1].split(' ');
  console.log(`Case #${i}: ${a} + ${b} = ${Number(a) + Number(b)}`);
}
