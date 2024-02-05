let fs = require('fs');
let [N, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

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

let result = 0;
let digit = 0;
let arr = N.split('');
for (i = arr.length - 1; i >= 0; i--) {
  if (10 - arr[i]) {
    // console.group('숫자일 경우');
    result += B ** digit * Number(arr[i]);
    // console.log(result);
    // console.groupEnd();
  } else {
    // console.group('문자일 경우');
    result += B ** digit * (10 + alphabet.indexOf(arr[i]));
    // console.log(result);
    // console.groupEnd();
  }
  digit += 1;
}

// console.group('최종');
console.log(result);