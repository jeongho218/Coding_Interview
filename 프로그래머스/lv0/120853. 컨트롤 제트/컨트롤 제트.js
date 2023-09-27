const solution = (s) => {
  return s
    .replaceAll(/-?\d+ Z\b/g, "")
    .split(" ")
    .reduce((a, b) => (a += Number(b)), 0);
};