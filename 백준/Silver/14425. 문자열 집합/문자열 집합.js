let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input.shift().split(' ');

let S = input.splice(0, N);
let obj = {};
for (i = 0; i < S.length; i++) {
  obj[S[i]] = S[i];
}

let answer = 0;
for (j = 0; j < input.length; j++) {
  if (obj[input[j]]) {
    answer += 1;
  }
}
console.log(answer);