let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map((v) => {
  return (v = v.split(' ')[0]);
});

const result = input.reduce((acc, cur) => {
  return cur == 136
    ? (acc += 1000)
    : cur == 142
      ? (acc += 5000)
      : cur == 148
        ? (acc += 10000)
        : (acc += 50000);
}, 0);
console.log(result);