let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let arr = input.map((v) => v.split(' '));
for (i = 0; i < arr.length; i++) {
  arr[i].push(i);
}
let sorting = arr
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[2] - b[2];
    } else {
      return a[0] - b[0];
    }
  })
  .map((v) => {
    v.pop();
    return v;
  });

let result = '';
sorting.forEach((v) => (result += `${v.join(' ')}\n`));
console.log(result);