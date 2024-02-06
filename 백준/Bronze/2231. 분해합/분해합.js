let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
let 생성자 = 1;

while (생성자 < input) {
  let 분해합 =
    생성자 +
    생성자
      .toString()
      .split('')
      .reduce((acc, cur) => (acc += Number(cur)), 0);

  if (분해합 === input) {
    return console.log(생성자);
  }
  생성자 += 1;
}

return console.log(0);