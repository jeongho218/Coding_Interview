const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  let answer = "";
  for (i = 0; i <= str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
      // 대문자라면 소문자로 변경, answer와 더함
      answer += str.charAt(i).toLowerCase();
    } else if (str.charAt(i) === str.charAt(i).toLowerCase()) {
      // 소문자라면 대문자로 변경, answer와 더함
      answer += str.charAt(i).toUpperCase();
    }
  }
  console.log(answer);
});
