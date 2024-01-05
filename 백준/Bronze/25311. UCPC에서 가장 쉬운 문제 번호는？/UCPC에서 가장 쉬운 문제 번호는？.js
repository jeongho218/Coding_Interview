const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
        console.log("A")
    rl.close();
});

rl.on("close", () => {
  process.exit();
});