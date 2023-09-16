const solution = (num_str) => {
  return [...num_str].reduce((a, b) => {
    return a + +b;
  }, 0);
};