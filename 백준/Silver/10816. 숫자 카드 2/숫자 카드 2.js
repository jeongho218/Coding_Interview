let fs = require('fs');
let [N, 가지고있는카드, M, 찾으려는수] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let arr = 가지고있는카드.split(' ');

let obj = {};

for (i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] += 1;
  } else {
    obj[arr[i]] = 1;
  }
}

let target = 찾으려는수.split(' ');
let answer = '';
for (j = 0; j < target.length; j++) {
  if (obj[target[j]]) {
    answer += `${obj[target[j]]} `;
  } else {
    answer += `0 `;
  }
}

console.log(answer);
