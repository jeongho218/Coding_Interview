const solution = (left, right) => {
  const measure = (n) => {
    let count = 0;
    for (j = 1; j <= n; j++) if (n % j === 0) count += 1;
    return count;
  };

  let answer = 0;
  for (i = left; i <= right; i++) {
    measure(i) % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
};