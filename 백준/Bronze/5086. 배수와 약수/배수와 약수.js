let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
input.forEach((v) => {
  let arr = v.split(' ').map((v) => Number(v));
  console.log(
    arr[0] > arr[1]
      ? arr[0] % arr[1] === 0
        ? 'multiple'
        : 'neither'
      : arr[1] % arr[0] === 0
        ? 'factor'
        : 'neither',
  );
});