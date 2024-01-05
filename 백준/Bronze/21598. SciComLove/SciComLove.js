const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  for(i=0; i<v; i++) {
      console.log("SciComLove")
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});