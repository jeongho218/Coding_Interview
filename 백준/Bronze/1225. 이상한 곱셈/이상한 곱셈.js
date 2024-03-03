let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let answer = 0;
for (i = 0; i < a.length; i++) {
  for (j = 0; j < b.length; j++) {
    answer += a[i] * b[j];
  }
}
console.log(answer);