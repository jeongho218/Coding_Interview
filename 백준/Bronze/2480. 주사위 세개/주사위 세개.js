const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (v) => {
  arr = v.split(" ");
  if (arr[0] === arr[1] && arr[1] === arr[2]) {
    console.log(10000 + arr[0] * 1000);
  } else if (arr[0] === arr[1] && arr[0] !== arr[2]) {
    console.log(1000 + arr[0] * 100);
  } else if (arr[0] !== arr[1] && arr[0] === arr[2]) {
    console.log(1000 + arr[0] * 100);
  } else if (arr[0] !== arr[1] && arr[1] === arr[2]) {
    console.log(1000 + arr[1] * 100);
  } else {
    console.log(Math.max(...arr.map((v) => +v)) * 100);
  }

  rl.close();
});

rl.on("close", () => {
  process.exit();
});
