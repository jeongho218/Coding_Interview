let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let original = input;

if (Number(input) < 10) {
  input = "0" + input;
}

let count = 0;
do {
  let add = Number(input[0]) + Number(input[1]);
  if (add < 10) {
    input = input[1] + add;
  } else {
    input = input[1] + add.toString()[1];
  }

  count += 1;
} while (Number(original) !== Number(input));

console.log(count);
