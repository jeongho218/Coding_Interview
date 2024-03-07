let fs = require("fs");
let [민국, 만세] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const blah = (arr) => {
  return arr.split(" ").reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);
};
console.log(Math.max(blah(민국), blah(만세)));
