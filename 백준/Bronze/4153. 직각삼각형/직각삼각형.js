let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
input.forEach((v) => {
  let arr = v
    .split(' ')
    .map((w) => Number(w))
    .sort((a, b) => a - b);
  console.log(arr[2] ** 2 === arr[0] ** 2 + arr[1] ** 2 ? 'right' : 'wrong');
  return;
});