let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [응시자, 수상자] = a.split(' ').map((v) => Number(v));
let 점수 = b.split(' ').map((v) => Number(v));
console.log(점수.sort((a, b) => b - a)[수상자 - 1]);