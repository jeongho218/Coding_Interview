let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let arr = input.map((v) => Number(v));
let coin = [25, 10, 5, 1];

for (i = 0; i < arr.length; i++) {
  let change = arr[i];
  let result = [];
  for (j = 0; j < coin.length; j++) {
    count = 0;
    while (change >= coin[j]) {
      change -= coin[j];
      count += 1;
    }
    result.push(count);
  }
  console.log(result.join(' '));
}