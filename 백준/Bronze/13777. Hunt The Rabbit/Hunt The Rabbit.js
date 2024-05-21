let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

let answer = '';

for (let i = 0; i < input.length - 1; i++) {
  let target = input[i];

  if (target === 25) {
    answer += `25\n`;
  } else {
    let txt = '';
    let min = 1;
    let max = 50;
    let mid = 25;

    while (target !== mid) {
      if (target < mid) {
        // target이 mid보다 작은 경우
        max = mid - 1;
        txt += `${mid} `;
      } else {
        // target이 mid보다 큰 경우
        min = mid + 1;
        txt += `${mid} `;
      }
      mid = min + Math.floor((max - min) / 2);
    }
    txt += `${target}`;
    answer += `${txt}\n`;
  }
}

console.log(answer);