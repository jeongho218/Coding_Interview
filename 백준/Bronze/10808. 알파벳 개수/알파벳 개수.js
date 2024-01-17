let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
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
let arr = new Array(26).fill(0);

input.split('').forEach((v) => {
  arr[alphabet.indexOf(v)] += 1;
});

console.log(arr.join(' '));