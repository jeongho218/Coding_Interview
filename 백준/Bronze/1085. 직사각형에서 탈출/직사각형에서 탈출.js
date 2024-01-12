let fs = require('fs');
let [x, y, w, h] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Math.min(x - 0, y - 0, w - x, h - y));