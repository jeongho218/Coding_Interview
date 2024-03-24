console.time();
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let answer = '';
for (i = 0; i < input.length; i++) {
  let [r, e, c] = input[i].split(' ');
  if (r > e - c) {
    answer += `do not advertise\n`;
  } else if (r < e - c) {
    answer += `advertise\n`;
  } else {
    answer += `does not matter\n`;
  }
}

console.log(answer);
