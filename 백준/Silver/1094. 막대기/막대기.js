let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin"));

let stick = 64;

if (input === stick) {
  console.log(1);
} else {
  let arr = [];

  const sum = (array) => {
    let 숫자 = 0;
    for (i = 0; i < array.length; i++) {
      숫자 += array[i];
    }
    return 숫자;
  };

  while (sum(arr) < input && stick > 1) {
    if (stick / 2 > input || sum(arr) + stick / 2 > input) {
      stick /= 2;
    } else {
      arr.push(stick / 2);
      stick /= 2;
    }
  }
  console.log(arr.length);  
}
