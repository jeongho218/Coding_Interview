const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr.push(v);
  if (arr.length >= 2) {
    console.log(arr[0] * arr[1][2]);
    console.log(arr[0] * arr[1][1]);
    console.log(arr[0] * arr[1][0]);
    console.log(arr[0] * arr[1]);
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
