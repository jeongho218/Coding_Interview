let fs = require('fs');
let input = Number(fs.readFileSync('/dev/stdin'));
console.log(`${'long '.repeat(Math.floor(input / 4))}int`);