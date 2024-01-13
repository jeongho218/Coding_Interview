let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(
  input == 'SONGDO'
    ? 'HIGHSCHOOL'
    : input == 'CODE'
      ? 'MASTER'
      : input == '2023'
        ? '0611'
        : 'CONTEST',
);