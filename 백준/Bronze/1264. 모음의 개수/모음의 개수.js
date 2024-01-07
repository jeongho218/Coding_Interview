let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

const target = ['a', 'e', 'i', 'o', 'u'];

input.map((v) => {
  let result = v.split('').reduce((a, b) => {
    return target.includes(b.toLowerCase()) ? ++a : a;
  }, 0);
  console.log(result);
});
