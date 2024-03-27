let fs = require("fs");
let [N, 상근이가가지고있는카드, M, 확인해야할카드] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

let obj = new Set(상근이가가지고있는카드);

let answer = "";
for (let i = 0; i < 확인해야할카드.length; i++) {
  if (obj.has(확인해야할카드[i])) {
    answer += `${1} `;
  } else {
    answer += `${0} `;
  }
}

console.log(answer);
