const solution = (n, k) => {
  let answer = [];
  for (i = k; i <= n; i++) {
    if (i % k === 0) {
      answer.push(i);
    }
  }
  return answer;
};