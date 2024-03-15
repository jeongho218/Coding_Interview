let fs = require("fs");
let [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(N * M - 1);
