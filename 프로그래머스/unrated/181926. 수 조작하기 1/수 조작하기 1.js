const solution = (n, control) => {
  [...control].forEach((element) => {
    element === "w"
      ? (n += 1)
      : element === "s"
      ? (n -= 1)
      : element === "d"
      ? (n += 10)
      : (n -= 10);
  });
  return n;
};