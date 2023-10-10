const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  let answer = 0;
  for (i = 1; i <= v; i++) {
    answer += i;
  }
  console.log(answer);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
