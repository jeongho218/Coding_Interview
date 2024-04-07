let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const fiveToSix = (input) => {
  return input.replaceAll('5', '6');
};

const sixToFive = (input) => {
  return input.replaceAll('6', '5');
};

console.log(
  `${Number(sixToFive(a)) + Number(sixToFive(b))} ${
    Number(fiveToSix(a)) + Number(fiveToSix(b))
  }`,
);