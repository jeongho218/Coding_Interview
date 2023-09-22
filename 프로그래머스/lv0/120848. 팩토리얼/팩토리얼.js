const solution = (n) => {
  let a = 1;
  let i = 1;
  while (a <= n) {
    i++;
    a *= i;
    if (a > n) {
      return i - 1;
    }
  }
};
