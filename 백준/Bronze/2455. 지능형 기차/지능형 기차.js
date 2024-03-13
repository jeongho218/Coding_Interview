let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [0];
for (i = 0; i < input.length; i++) {
  let [내린사람, 탄사람] = input[i].split(" ").map((v) => Number(v));
  arr.push(arr[arr.length - 1] - 내린사람 + 탄사람);
}

console.log(Math.max(...arr));
