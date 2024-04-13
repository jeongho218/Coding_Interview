let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
let arr = [];

for (i = 1; i < input.length; i++) {
  if (input[i].includes("push")) {
    let [cmd, x] = input[i].split(" ");
    arr.push(x);
  } else if (input[i] === "pop") {
    if (arr.length === 0) {
      answer += `-1\n`;
    } else {
      let poped = arr.pop();
      answer += `${poped}\n`;
    }
  } else if (input[i] === "size") {
    answer += `${arr.length}\n`;
  } else if (input[i] === "empty") {
    if (arr.length === 0) {
      answer += `1\n`;
    } else {
      answer += `0\n`;
    }
  } else {
    if (arr.length === 0) {
      answer += `-1\n`;
    } else {
      answer += `${arr[arr.length - 1]}\n`;
    }
  }
}
console.log(answer);