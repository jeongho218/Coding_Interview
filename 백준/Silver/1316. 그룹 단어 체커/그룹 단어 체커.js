let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
let result = [];
input.forEach((v) => {
  let target = v.split('');
  let thisIs = 'group word';

  let check = [];
  target.forEach((w) => {
    w == check[check.length - 1]
      ? true
      : check.includes(w)
        ? (thisIs = 'not group word')
        : check.push(w);
  });

  if (thisIs === 'group word') {
    result.push('group');
  }
});

console.log(`${result.length}`);