let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

if (input === 1) {
  console.log("*");
} else {
  let result = "";
  for (i = 0; i < input * 2; i++) {
    for (j = 0; j < input; j++) {
      if (i % 2 === 0) {
        // i가 짝수이면 짝수에 별
        if (j % 2 === 0) {
          result += "*";
        } else {
          result += " ";
        }
      } else {
        // i가 홀수이면 홀수에 별
        if (j % 2 === 1) {
          result += "*";
        } else {
          result += " ";
        }
      }
    }
    result += `\n`;
  }
  console.log(result);
}
