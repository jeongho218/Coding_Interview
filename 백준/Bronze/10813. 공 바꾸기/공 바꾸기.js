let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));
let change = input.map((v) => v.split(' ').map((v) => Number(v)));
let basket = new Array(N).fill(0).map((v, i) => (v = i + 1));

for (i = 0; i < change.length; i++) {
  let tmp = basket[change[i][0] - 1];
  basket[change[i][0] - 1] = basket[change[i][1] - 1];
  basket[change[i][1] - 1] = tmp;
}

console.log(basket.join(' '));