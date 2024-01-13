let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let promise = [
  'Never gonna give you up',
  'Never gonna let you down',
  'Never gonna run around and desert you',
  'Never gonna make you cry',
  'Never gonna say goodbye',
  'Never gonna tell a lie and hurt you',
  'Never gonna stop',
];

const count = input.shift();
console.log(
  input.reduce((acc, cur) => (promise.includes(cur) ? ++acc : acc), 0) == count
    ? 'No'
    : 'Yes',
);