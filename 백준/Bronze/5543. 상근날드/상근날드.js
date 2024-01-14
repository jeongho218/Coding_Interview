let fs = require('fs');
let 메뉴 = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));
let 버거 = 메뉴.splice(0, 3).sort((a, b) => a - b);
let 음료 = 메뉴.sort((a, b) => a - b);

console.log(버거[0] + 음료[0] - 50);