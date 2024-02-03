let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, M] = input[0].split(" ").map((v) => Number(v));
let numbers = input[1].split(" ").map((v) => Number(v));

let arr = [];
for (i = 0; i < numbers.length - 2; i++) {
  for (j = i + 1; j < numbers.length - 1; j++) {
    for (k = j + 1; k < numbers.length; k++) {
      if (numbers[i] + numbers[j] + numbers[k] <= M) {
        arr.push(numbers[i] + numbers[j] + numbers[k]);
      }
    }
  }
}

console.log(arr.sort((a, b) => b - a)[0]);