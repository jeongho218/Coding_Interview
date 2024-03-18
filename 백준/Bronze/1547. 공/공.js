let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input = input.map((v) => v.split(' '));

let cups = ['1', '2', '3'];

for (i = 0; i < input.length; i++) {
  let tmpIndex = cups.indexOf(input[i][1]);
  let tmpValue = input[i][0]; 
  cups[cups.indexOf(input[i][0])] = input[i][1]; 
  cups[tmpIndex] = tmpValue;
}

console.log(cups[0]);
