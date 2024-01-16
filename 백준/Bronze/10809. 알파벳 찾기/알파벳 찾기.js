let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('');
let 중복제거 = [];
input.forEach((v) => {
  중복제거.includes(v) ? 중복제거.push('') : 중복제거.push(v);
});

let alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

let result = [];

alphabet.forEach((v) => {
  result.push(중복제거.indexOf(v));
});

console.log(result.join(' '));