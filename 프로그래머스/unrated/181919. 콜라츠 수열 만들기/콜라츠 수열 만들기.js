const solution = (n) => {
  let a = [n];
  while (n !== 1) {
    n % 2 === 0 ? (n /= 2) : (n = 3 * n + 1);
    a.push(n);
  }

  return a;
};