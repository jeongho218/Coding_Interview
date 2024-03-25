let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input.shift().split(" ");
let 듣도못한사람 = input.splice(0, n);

let arr = [];
if (n < m) {
  let obj = new Set(input); // 보도못한사람
  for (let i = 0; i < 듣도못한사람.length; i++) {
    if (obj.has(듣도못한사람[i])) {
      // 듣도못한사람이 보도못한사람 목록에 있는가?
      arr.push(듣도못한사람[i]);
    }
  }
} else {
  let obj = new Set(듣도못한사람);
  for (let j = 0; j < input.length; j++) {
    if (obj.has(input[j])) {
      // 보도못한사람이 듣도못한사람 목록에 있는가?
      arr.push(input[j]);
    }
  }
}

arr = [arr.length, ...arr.sort()];
console.log(arr.join(`\n`));
