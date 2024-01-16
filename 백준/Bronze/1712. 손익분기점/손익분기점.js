let fs = require('fs');
let [고정비용, 가변비용, 판매비용] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

if (가변비용 >= 판매비용) {
  console.log(-1);
} else {
  let 판매량 = Math.floor(고정비용 / (판매비용 - 가변비용));
  console.log(판매량 + 1);
}