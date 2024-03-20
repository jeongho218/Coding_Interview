let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let answer = "";
for (i = 0; i < input.length; i++) {
  answer += `${input[i]
    .split(" ")
    .map((v) => v.split("").reverse().join(""))
    .join(" ")}\n`;
}

console.log(answer);
