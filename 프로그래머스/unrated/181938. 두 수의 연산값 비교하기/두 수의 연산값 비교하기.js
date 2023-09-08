const solution = (a, b) => {
  return parseInt("" + a + b) > 2 * a * b ? parseInt("" + a + b) : 2 * a * b;
};