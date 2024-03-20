let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

input = [...input[0].split(" ")];

const gcd = (x, y) => {
  for (j = Math.min(x, y); j >= 1; j--) {
    if (x % j === 0 && y % j === 0) {
      return j;
    }
  }
};

let answer = "";
for (i = 1; i < input.length; i++) {
  if (input[0] % input[i] === 0) {
    answer += `${input[0] / input[i]}/1\n`;
  } else {
    let tmp = gcd(input[0], input[i]);
    answer += `${input[0] / tmp}/${input[i] / tmp}\n`;
  }
}

console.log(answer);
