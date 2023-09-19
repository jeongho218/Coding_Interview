const solution = (n) => {
  let a = Math.sqrt(n);
  return a === Math.floor(a) ? (a + 1) ** 2 : -1;
};