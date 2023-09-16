const solution = (numbers, n) => {
  return numbers.reduce((a, b) => {
    if (a > n) return a;
    return a + b;
  }, 0);
};