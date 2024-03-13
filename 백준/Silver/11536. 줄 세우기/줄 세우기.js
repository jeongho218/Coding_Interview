let fs = require("fs");
let input = fs.readFileSync(0, 'utf-8').toString().trim().split("\n");

input.shift();
input.reverse();
// console.log(input);

if (input[0] < input[1]) {
  // decreasing case
  for (i = 1; i < input.length - 1; i++) {
    if (input[i] > input[i + 1]) {
      return console.log("NEITHER");
    }
  }
  console.log("DECREASING");
} else if (input[0] > input[1]) {
  // increasing case
  for (i = 1; i < input.length - 1; i++) {
    if (input[i] < input[i + 1]) {
      return console.log("NEITHER");
    }
  }
  console.log("INCREASING");
}
