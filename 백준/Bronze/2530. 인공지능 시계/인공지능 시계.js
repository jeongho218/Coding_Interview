let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [시, 분, 초] = input[0].split(' ').map((v) => Number(v));
const 소요시간 = Number(input[1]);

초 += 소요시간;

if (초 >= 60) {
  분 += Math.floor(초 / 60);
  초 = 초 % 60;
}

if (분 >= 60) {
  시 += Math.floor(분 / 60);
  분 = 분 % 60;
}

if (시 >= 24) {
  시 = Math.floor(시 % 24);
}

// 최종
console.log(시, 분, 초);