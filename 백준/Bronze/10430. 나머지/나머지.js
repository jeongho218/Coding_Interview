const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr = v.split(" ");
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);
  let C = parseInt(arr[2]);
  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
