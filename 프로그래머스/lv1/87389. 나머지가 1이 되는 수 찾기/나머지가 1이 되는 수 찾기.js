const solution = (n) => {
  let answer = 0;
  for (i = 2; i < n; i++) {
    if (n % i === 1) {
      return (answer = i);
    }
  }
  return answer;
};