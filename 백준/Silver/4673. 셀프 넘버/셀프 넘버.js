const check = (num) => {
  let str = num + '';
  for (j = 0; j < str.length; j++) {
    num += Number(str[j]);
  }
  return num;
};

let notSelfNumber = {};
let answer = '';
for (i = 1; i <= 10000; i++) {
  let checkedNumber = check(i);
  notSelfNumber[checkedNumber] = '';
  if (notSelfNumber[i] === '') {
    // do nothing
  } else {
    answer += `${i}\n`;
  }
}

console.log(answer);