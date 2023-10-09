const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  arr = v.split(" ").map((x) => parseInt(x));
  if (arr[0] > arr[1]) {
    console.log(">");
  } else if (arr[0] < arr[1]) {
    console.log("<");
  } else {
    console.log("==");
  }

  rl.close();
});

rl.on("close", () => {
  process.exit();
});
