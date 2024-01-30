let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = '';
let arr = input.map((v) => v.split(''));

for (i = 0; i < 15; i++) {
  for (j = 0; j < 5; j++) {
    arr[j][i] ? (result += arr[j][i]) : false;
  }
}

console.log(result);