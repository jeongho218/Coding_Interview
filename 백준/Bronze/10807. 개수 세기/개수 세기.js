const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  if (arr.length === 1) {
    arr.push(v.split(" "));
  } else {
    arr.push(v);
  }

  if (arr.length >= 3) {
    console.log(
      arr[1].reduce((a, b) => {
        return b === arr[2] ? (a += 1) : a;
      }, 0)
    );
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
