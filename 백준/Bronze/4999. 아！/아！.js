let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(a.length >= b.length ? 'go' : 'no');