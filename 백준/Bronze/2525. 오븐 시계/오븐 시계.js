let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [시간, 분] = input[0].split(' ').map((v) => Number(v));

분 += Number(input[1]);
if (분 >= 60) {
  시간 += Math.floor(분 / 60);
  분 = 분 % 60;
}
if (시간 >= 24) {
  시간 = 시간 % 24;
}

console.log(시간, 분);

