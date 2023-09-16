const solution = (start, end) => {
  let answer = [];
  for (i = start; i >= end; i--) answer.push(i);
  return answer;
};