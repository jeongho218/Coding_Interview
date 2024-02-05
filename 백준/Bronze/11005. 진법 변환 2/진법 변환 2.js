let fs = require('fs');
let [N, B] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

let alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

let result = [];

while (N / B >= 1) {
  result.push(N % B > 9 ? alphabet[(N % B) - 10] : N % B);
  N = Math.floor(N / B);
}
result.push(N > 9 ? alphabet[N - 10] : N);

console.log(result.reverse().join(''));