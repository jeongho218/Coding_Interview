let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));

const dcsy = (num) => {
  let str = num.toString();
  let a = str[2] - str[1];
  let b = str[1] - str[0];
  if (a === b) {
    return true;
  }
};

if (input < 100) {
  console.log(input);
} else {
  let count = 99;
  for (i = 111; i <= input; i++) {
    if (i === 1000) {
      // do nothing
    } else if (dcsy(i)) {
      count += 1;
    }
  }

  console.log(count);
}