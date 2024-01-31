let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

input.shift();
let 최대값의위치 = input.indexOf(Math.max(...input));
let 맨앞 = input[input.length - 1];
let arr = [맨앞];

for (i = input.length - 2; i >= 최대값의위치; i--) {
  if (input[i] > 맨앞 && input[i] > arr[arr.length - 1]) {
    arr.push(input[i]);
  }
}

console.log(arr.length);