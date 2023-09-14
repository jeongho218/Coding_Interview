const solution = (x) => {
  let sum = [...(x + "")].reduce((a, b) => {
    return a + +b;
  }, 0);

  return x % sum === 0 ? true : false;
};