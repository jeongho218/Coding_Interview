const solution = (array) => {
  return array
    .join("")
    .split("")
    .reduce((a, b) => {
      return b == 7 ? (a += 1) : a;
    }, 0);
};