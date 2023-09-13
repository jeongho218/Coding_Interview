const solution = (array, n) => {
  let answer = 0;
  array.forEach((element) => {
    if (n === element) {
      answer += 1;
    }
  });
  return answer;
};