let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let arr = [];

if (input == 0) {
  console.log(1);
} else {
  for (i = input; i >= 1; i--) {
    arr.push(i);
  }
  console.log(
    arr.reduce((acc, cur) => {
      return (acc *= cur);
    }),
  );
}