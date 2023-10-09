const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  if ((v % 4 === 0 && v % 100 !== 0) || v % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }

  rl.close();
});

rl.on("close", () => {
  process.exit();
});
