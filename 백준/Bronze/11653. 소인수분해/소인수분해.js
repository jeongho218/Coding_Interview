let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

let result = [];
if (input === 1) {
  console.log();
} else {
  let i = 2;
  while (input !== 1) {
    while (input % i === 0) {
      result.push(i);
      input = input / i;
    }
    i += 1;
  }
  result.forEach((v) => console.log(v));
}