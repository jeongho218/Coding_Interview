const solution = (n) => {
  let a = [];
  for (i = 1; i <= n; i++) {
    n % i === 0 ? a.push(i) : "";
  }
  return a;
};
