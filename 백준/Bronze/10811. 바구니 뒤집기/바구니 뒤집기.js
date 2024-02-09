let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));
let reverse = input.map((v) => v.split(' ').map((v) => Number(v)));
let basket = new Array(N).fill(0).map((v, i) => (v = i + 1));

for (i = 0; i < reverse.length; i++) {
  let result = [
    ...basket.slice(0, reverse[i][0] - 1),
    ...basket.slice(reverse[i][0] - 1, reverse[i][1]).reverse(),
    ...basket.slice(reverse[i][1]),
  ];
  basket = result;
}

console.log(basket.join(' '));