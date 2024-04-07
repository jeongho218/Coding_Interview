let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
for (i = 1; i < input.length; i++) {
  let [v, e] = input[i].split(" ");
  answer += `${2 - v + Number(e)}\n`;
}
console.log(answer);