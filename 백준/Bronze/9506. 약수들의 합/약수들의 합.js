let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

input.pop();

for (i = 0; i < input.length; i++) {
  let 약수 = [];
  for (j = 1; j <= input[i]; j++) {
    input[i] % j === 0 ? 약수.push(j) : false;
  }
  약수.pop();
  if (input[i] === 약수.reduce((acc, cur) => (acc += cur))) {
    console.log(`${input[i]} = ${약수.join(" + ")}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}