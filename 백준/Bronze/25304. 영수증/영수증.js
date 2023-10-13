const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (v) => {
  arr.push(v);

  if (arr.length >= +arr[1] + 2) {
    let sum = 0;
    for (i = 2; i < arr.length; i++) {
      let [가격, 개수] = arr[i].split(" ");
      sum += 가격 * 개수;
    }
    if (+arr[0] === sum) {
      console.log("Yes");
    } else {
      console.log("No");
    }
    rl.close();
  }
});

rl.on("close", () => {
  process.exit();
});
