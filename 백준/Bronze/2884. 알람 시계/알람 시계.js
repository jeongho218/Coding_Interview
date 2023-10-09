const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  arr = v.split(" ").map((v) => +v);

  if (arr[1] >= 45) {
    console.log(`${arr[0]} ${arr[1] - 45}`);
  } else if (arr[0] === 0) {
    console.log(`23 ${arr[1] + 15}`);
  } else {
    console.log(`${arr[0] - 1} ${arr[1] + 15}`);
  }
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
