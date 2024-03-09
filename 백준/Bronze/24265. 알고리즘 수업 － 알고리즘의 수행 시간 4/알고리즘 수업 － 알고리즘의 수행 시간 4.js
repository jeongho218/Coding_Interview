let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

let count = 0;
for (i = 1; i <= input; i++) {
  count += input - i;
}

console.log(count);
console.log(2);