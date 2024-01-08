let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const arr = input[0].split(' ').sort((a, b) => a - b);
console.log(arr[0] * arr[`${arr.length - 1}`]);