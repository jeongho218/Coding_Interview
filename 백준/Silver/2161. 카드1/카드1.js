let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

let arr = [];

for (i = 1; i <= input; i++) {
  arr.push(i);
}

let answer = "";
for (j = 1; j < input; j++) {
  answer += `${arr[0]} `;
  arr.shift();
  arr = [...arr.slice(1), ...arr.slice(0, 1)];
}
answer += `${arr[0]}`;

console.log(answer);
