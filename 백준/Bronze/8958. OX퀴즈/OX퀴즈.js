let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let score = "";

for (i = 0; i < input.length; i++) {
  let arr = [];
  for (j = 0; j < input[i].length; j++) {
    if (input[i][j] === "X") {
      arr.push(0);
    } else if (j === 0 && input[i][j] === "O") {
      arr.push(1);
    } else if (j >= 1 && input[i][j] === "O" && input[i][j - 1] === "O") {
      arr.push(arr[arr.length - 1] + 1);
    } else {
      arr.push(1);
    }
  }
  score += `${arr.reduce((acc, cur) => (acc += cur))}\n`;
}

console.log(score);
