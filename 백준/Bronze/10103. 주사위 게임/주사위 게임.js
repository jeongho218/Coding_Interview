let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
input = input.map((v) => v.split(" ").map((w) => Number(w)));

let [창영, 상덕] = [100, 100];
for (i = 0; i < input.length; i++) {
  if (input[i][0] > input[i][1]) {
    상덕 -= input[i][0];
  } else if (input[i][0] < input[i][1]) {
    창영 -= input[i][1];
  }
}

console.log(창영);
console.log(상덕);
