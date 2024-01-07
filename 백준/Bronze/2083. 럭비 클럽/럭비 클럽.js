let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.pop();

input.forEach((v) => {
  const [name, age, weight] = v.split(' ');
  if (age > 17 || weight >= 80) {
    console.log(`${name} Senior`);
  } else {
    console.log(`${name} Junior`);
  }
});
