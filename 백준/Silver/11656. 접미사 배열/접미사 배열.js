let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let arr = [];
let answer = "";
for (i = 0; i < input.length; i++) {
  arr.push(input.slice(i));
}

arr.sort();
for (j = 0; j < arr.length; j++) {
  answer += `${arr[j]}\n`;
}

console.log(answer);
