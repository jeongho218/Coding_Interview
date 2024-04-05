let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let obj = {};

for (i = 0; i < input.length; i++) {
  for (j = i + 1; j <= input.length; j++) {
    let piece = input.slice(i, j);
    obj[piece] = "value";
  }
}

console.log(Object.keys(obj).length);