const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  if (v >= 90) {
    console.log("A");
  } else if (v >= 80) {
    console.log("B");
  } else if (v >= 70) {
    console.log("C");
  } else if (v >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }

  rl.close();
});

rl.on("close", () => {
  process.exit();
});
