const solution = (array) => {
  let answer = [];
  answer.push(Math.max(...array));
  array.filter((v, i) => {
    return v === Math.max(...array) ? answer.push(i) : "";
  });

  return answer;
};