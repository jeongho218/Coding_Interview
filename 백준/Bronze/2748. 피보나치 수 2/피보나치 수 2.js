let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));

let arr = [0, 1];
for (i = 1; i < 90; i++) {
  arr.push(BigInt(arr[i - 1]) + BigInt(arr[i]));
}

console.log(arr[input].toString());