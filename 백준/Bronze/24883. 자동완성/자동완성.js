let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(input === 'N' || input === 'n' ? 'Naver D2' : 'Naver Whale');