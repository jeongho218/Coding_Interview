let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let arr = [];
input.map((v) => {
  let [x, y, z] = v.split(' ');
  let a = Number(x);
  let d = Number(y);
  let g = Number(z);

  if (a === d + g) {
    arr.push(a * (d + g) * 2);
  } else {
    arr.push(a * (d + g));
  }
});
arr.sort((a, b) => b - a);
console.log(arr[0]);
