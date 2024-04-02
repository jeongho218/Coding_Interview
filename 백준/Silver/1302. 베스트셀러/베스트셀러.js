let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let sold = {};
for (i = 1; i < input.length; i++) {
  if (sold[input[i]]) {
    sold[input[i]] += 1;
  } else {
    sold[input[i]] = 1;
  }
}

let soldArr = Object.entries(sold).sort((a, b) => b[1] - a[1]);

let arr = [];
let j = 0;
while (j < soldArr.length && soldArr[j][1] === soldArr[0][1]) {
  arr.push(soldArr[j][0]);
  j += 1;
}
console.log(arr.sort()[0]);