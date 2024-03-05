let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let result = "";
let arr = input.map((v) => v.split(" ").map((v) => Number(v)));
let 평균점수 = arr.map(
  (v) => (v.reduce((acc, cur) => (acc += cur)) - v[0]) / v[0]
);

for (i = 0; i < arr.length; i++) {
  let count = 0;
  for (j = 1; j < arr[i].length; j++) {
    if (arr[i][j] > 평균점수[i]) count++;
  }
  console.log(((count / arr[i][0]) * 100).toFixed(3) + "%");
}
