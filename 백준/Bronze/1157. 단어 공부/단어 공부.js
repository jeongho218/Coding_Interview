let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
let arr = [];
let count = [];

for (i = 0; i < input.length; i++) {
  if (!arr.includes(input[i])) {
    arr.push(input[i]);
    count.push([input[i], 1]);
  } else {
    for (j = 0; j < count.length; j++) {
      if (count[j].includes(input[i])) {
        count[j][1]++;
      }
    }
  }
}

count.sort((a, b) => b[1] - a[1]);

if (count.length === 1) {
  console.log(count[0][0]);
} else if (count[0][1] === count[1][1]) {
  console.log('?');
} else {
  console.log(count[0][0]);
}