let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let count = 10;

for (i = 1; i < input.length; i++) {
  input[i - 1] === input[i] ? (count += 5) : (count += 10);
}
console.log(count);
