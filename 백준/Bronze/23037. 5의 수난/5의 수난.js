let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let answer = 0;
for (i = 0; i < input.length; i++) {
  answer += input[i] ** 5;
}
console.log(answer);