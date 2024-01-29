let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let 이중배열 = input.map((v) => v.split(' '));

let 최대값 = input
  .map((v) => {
    let arr = v.split(' ');
    arr.sort((a, b) => b - a);
    return arr[0];
  })
  .sort((a, b) => b - a)[0];

for (i = 0; i < 9; i++) {
  for (j = 0; j < 9; j++) {
    if (이중배열[i][j] === 최대값) {
      console.log(최대값);
      console.log(`${i + 1} ${j + 1}`);
    }
  }
}