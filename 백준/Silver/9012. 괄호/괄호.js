let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (str) => {
  let count = 0;
  for (j = 0; j < str.length; j++) {
    if (str[j] === '(') {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === -1) {
      return false;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
};

let answer = '';
for (i = 1; i < input.length; i++) {
  if (input[i][0] === ')' || input[i][input[i].length - 1] === '(') {
    answer += `NO\n`;
  } else {
    if (solution(input[i])) {
      answer += `YES\n`;
    } else {
      answer += `NO\n`;
    }
  }
}

console.log(answer);