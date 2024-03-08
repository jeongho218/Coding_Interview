let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let result = "";

while (input.length !== 0) {
  let arr = [];
  if (input[1] === "0") {
    arr.push(...input.splice(0, 2));
    result += `${arr[0]}\n`;
  } else {
    arr.push(...input.splice(0, 2 + Number(input[1])));

    result += `${
      Number(arr[0]) +
      arr.reduce((acc, cur, index) => {
        return index > 1
          ? (acc += cur.split(" ").reduce((inAcc, inCur) => {
              return (inAcc *= inCur);
            }, 1))
          : acc;
      }, 0)
    }\n`;
  }
}

console.log(result);