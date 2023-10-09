const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr = v.split(" ");
  console.log(+arr[0] + +arr[1] + +arr[2]);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
