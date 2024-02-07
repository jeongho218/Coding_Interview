let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));
let ball = input.map((v) => v.split(' ').map((v) => Number(v)));
let basket = new Array(N).fill(0);

for (a = 0; a < ball.length; a++) {
  let [i, j, k] = ball[a];
  for (b = i - 1; b <= j - 1; b++) {
    basket[b] = k;
  }
}

console.log(basket.join(' '));