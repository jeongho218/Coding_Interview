const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  console.log(v*24)
  rl.close();
});

rl.on("close", () => {
  process.exit();
});