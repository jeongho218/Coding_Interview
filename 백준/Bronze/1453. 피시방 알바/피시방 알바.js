let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let seat = Array(100).fill(0);
let count = 0;

let arr = input[1].split(" ").map((v) => Number(v));
for (i = 0; i < arr.length; i++) {
  let x = arr[i] - 1;
  seat[x] === 0 ? (seat[x] = 1) : (count += 1);
}

console.log(count);