let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));

let arr = [];
let num = 666;
while (arr.length < input) {
  if (num.toString().includes('666')) {
    arr.push(num);
    num += 1;
  } else {
    num += 1;
  }
}
console.log(arr[arr.length - 1]);