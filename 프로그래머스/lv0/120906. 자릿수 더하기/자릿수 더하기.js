const solution = (n) => {
  let a = [...(n + "")].reduce((a, b) => {
    return a + +b;
  }, 0);

  return a;
};