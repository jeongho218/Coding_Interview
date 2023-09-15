const solution = (arr) => {
    let answer = [];
  arr.forEach((element) => {
    element >= 50 && element % 2 === 0
      ? answer.push((element /= 2))
      : element < 50 && element % 2 === 1
      ? answer.push((element *= 2))
      : answer.push(element);
  });

  return answer;
};