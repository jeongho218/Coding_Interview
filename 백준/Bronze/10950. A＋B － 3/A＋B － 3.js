const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr.push(v);
  if (arr.length > arr[0]) {
    for (i = 1; i < arr.length; i++) {
      console.log(parseInt(arr[i][0]) + parseInt(arr[i][2]));
    }
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
