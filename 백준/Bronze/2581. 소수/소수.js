let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

const isPrime = (v) => {
  if (v < 2) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(v); i++) {
    if (v % i === 0) {
      return false;
    }
  }
  return true;
};

let arr = [];
if (input[0] === input[1]) {
  if (isPrime(input[0])) {
    arr.push(input[0]);
  }
} else {
  for (j = input[0]; j <= input[1]; j++) {
    if (isPrime(j)) {
      arr.push(j);
    }
  }
}

if (arr.length === 0) {
  console.log('-1');
} else {
  console.log(arr.reduce((acc, cur) => (acc += cur), 0));
  console.log(arr[0]);
}