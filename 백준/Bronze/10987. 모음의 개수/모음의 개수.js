let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");

console.log(
  input.reduce((acc, cur) => {
    return cur === "a" ||
      cur === "e" ||
      cur === "i" ||
      cur === "o" ||
      cur === "u"
      ? (acc += 1)
      : acc;
  }, 0)
);
