let fs = require("fs");
let [곡수, 평균값] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(곡수 * (평균값 - 1) + 1);