const solution = (my_string) => {
  return [...my_string]
    .map((v) => {
      return parseInt(v);
    })
    .filter((v) => v || v === 0)
    .sort((a, b) => a - b);
};