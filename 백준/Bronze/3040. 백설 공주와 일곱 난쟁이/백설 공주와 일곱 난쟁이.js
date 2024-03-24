let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

const solution = (input) => {
  for (a = 0; a < 3; a++) {
    for (b = a + 1; b < 4; b++) {
      for (c = b + 1; c < 5; c++) {
        for (d = c + 1; d < 6; d++) {
          for (e = d + 1; e < 7; e++) {
            for (f = e + 1; f < 8; f++) {
              for (g = f + 1; g < 9; g++) {
                let arr = [];
                arr.push(
                  ...[
                    input[a],
                    input[b],
                    input[c],
                    input[d],
                    input[e],
                    input[f],
                    input[g],
                  ],
                );
                if (arr.reduce((acc, cur) => (acc += cur)) === 100) {
                  let str = '';
                  for (i = 0; i < arr.length; i++) {
                    str += `${arr[i]}\n`;
                  }
                  return str;
                } // 결과 종료 괄호
              }
            }
          }
        }
      }
    }
  }
}; // 함수 solution 종료 괄호

console.log(solution(input));
