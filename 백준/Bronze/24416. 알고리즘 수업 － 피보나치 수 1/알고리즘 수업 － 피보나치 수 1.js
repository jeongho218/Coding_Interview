let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

let 실행횟수 = 0;
const test = (n) => {
  if (n === 1 || n === 2) {
    실행횟수 += 1;
    return 1;
  } else {
    return test(n - 1) + test(n - 2);
  }
};

console.log(test(input));
console.log(input - 2);
