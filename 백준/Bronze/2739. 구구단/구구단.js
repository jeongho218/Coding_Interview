const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  for (i = 1; i < 10; i++) {
    console.log(`${v} * ${i} = ${v * i}`);
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
