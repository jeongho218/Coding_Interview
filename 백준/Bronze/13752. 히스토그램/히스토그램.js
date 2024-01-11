let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.forEach((v) => {
  console.log(`${'='.repeat(v)}`);
});
