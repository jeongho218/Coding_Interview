let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
let arr = [];

for (i = 1; i < input.length; i++) {
  let cmd = input[i];

  if (cmd.includes("push_front")) {
    let [drop, x] = cmd.split(" ");
    arr = [x, ...arr];
  } else if (cmd.includes("push_back")) {
    let [drop, x] = cmd.split(" ");
    arr = [...arr, x];
  } else if (cmd === "pop_front") {
    if (arr.length === 0) {
      answer += `-1\n`;
    } else {
      let tmp = arr.shift();
      answer += `${tmp}\n`;
    }
  } else if (cmd === "pop_back") {
    if (arr.length === 0) {
      answer += `-1\n`;
    } else {
      let tmp = arr.pop();
      answer += `${tmp}\n`;
    }
  } else if (cmd === "size") {
    answer += `${arr.length}\n`;
  } else if (cmd === "empty") {
    if (arr.length === 0) {
      answer += `1\n`;
    } else {
      answer += `0\n`;
    }
  } else if (cmd === "front") {
    if (arr.length === 0) {
      answer += `-1\n`;
    } else {
      answer += `${arr[0]}\n`;
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