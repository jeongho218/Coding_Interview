let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let croatian = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;

for (i = 0; i < croatian.length; i++) {
  let word = croatian[i];
  while (input.includes(word)) {
    let a = '';
    a += input.slice(0, input.indexOf(word));
    a += ' ';
    if (word === 'dz=') {
      a += input.slice(input.indexOf(word) + 3);
    } else {
      a += input.slice(input.indexOf(word) + 2);
    }
    input = a;
    count += 1;
  }
}

let remain = input.split('').filter((v) => v !== ' ').length;

console.log(count + remain);