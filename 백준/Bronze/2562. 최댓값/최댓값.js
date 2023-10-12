const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr.push(v);
  if (arr.length >= 9) {
    console.log(Math.max(...arr));
    console.log(arr.indexOf("" + Math.max(...arr)) + 1);

    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
