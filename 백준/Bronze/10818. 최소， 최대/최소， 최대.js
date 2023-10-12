const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr.push(v);
  if (arr.length >= 2) {
    innerArr = arr[1].split(" ");
    console.log(`${Math.min(...innerArr)} ${Math.max(...innerArr)}`);

    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
