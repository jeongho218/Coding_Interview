let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[0].split(' ');
console.log(arr[0] * arr[1] - arr[2] * arr[3] * arr[4]);