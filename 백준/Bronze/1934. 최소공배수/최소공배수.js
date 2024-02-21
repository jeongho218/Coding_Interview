let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';
input.shift();
let arr = input.map((v) => v.split(' ').map((w) => Number(w)));

for (i = 0; i < arr.length; i++) {
  let [a, b] = arr[i].sort((a, b) => a - b);
  if (a === b) {
    answer += `${a}\n`;
  } else {
    let CMD = a;
    while (!(a % CMD === 0 && b % CMD === 0)) {
      CMD -= 1;
    }

    answer += `${(a * b) / CMD}\n`;
  }
}
console.log(answer);