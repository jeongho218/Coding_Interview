let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
console.log(Math.ceil(input / 5));