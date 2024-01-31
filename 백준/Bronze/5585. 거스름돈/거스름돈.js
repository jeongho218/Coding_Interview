let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
let change = 1000 - input;
let count = 0;

let coin = [500, 100, 50, 10, 5, 1];
for (i = 0; i < coin.length; i++) {
  while (change >= coin[i]) {
    change -= coin[i];
    count += 1;
  }
}

console.log(count);