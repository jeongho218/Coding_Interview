const solution = (num_list) => {
  return num_list.length >= 11
    ? num_list.reduce((a, b) => {
        return a + b;
      })
    : num_list.reduce((a, b) => {
        return a * b;
      });
};