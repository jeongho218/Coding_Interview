const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr.push(v.split(" "));

  if (arr.length >= 2) {
    console.log(
      arr[1]
        .filter((v) => {
          return v < +arr[0][1] ? v : false;
        })
        .join(" ")
    );
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
