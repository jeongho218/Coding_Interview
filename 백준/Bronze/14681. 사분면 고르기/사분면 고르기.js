const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr.push(v);
  if (arr.length >= 2) {
    if (arr[0] > 0) {
      arr[1] > 0 ? console.log(1) : console.log(4);
    } else {
      arr[1] > 0 ? console.log(2) : console.log(3);
    }

    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
