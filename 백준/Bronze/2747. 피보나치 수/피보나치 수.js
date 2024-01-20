let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));

let arr = [0, 1];
for (i = 1; i < 45; i++) {
  arr.push(arr[i - 1] + arr[i]);
}

console.log(arr[input]);