const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  let a = "*";
  for (i = 1; i <= parseInt(v); i++) {
    console.log(a.repeat(i));
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
