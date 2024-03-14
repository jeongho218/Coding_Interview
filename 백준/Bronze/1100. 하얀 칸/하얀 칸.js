let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 0;
for (i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    for (j = 0; j < 8; j++) {
      if (j % 2 === 0 && input[i][j] === "F") {
        count += 1;
      }
    }
  } else {
    for (j = 0; j < 8; j++) {
      if (j % 2 === 1 && input[i][j] === "F") {
        count += 1;
      }
    }
  }
}

console.log(count);
