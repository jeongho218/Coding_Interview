let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (i = 0; i < input.length - 1; i++) {
  console.log(parseInt(input[i][0]) + parseInt(input[i][2]));
}
