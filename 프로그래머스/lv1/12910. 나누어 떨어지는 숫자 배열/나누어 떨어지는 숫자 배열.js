const solution = (arr, divisor) => {
  return arr.filter((v) => {
    return v % divisor === 0 ? v : "";
  }).length
    ? arr
        .filter((v) => {
          return v % divisor === 0 ? v : "";
        })
        .sort((a, b) => a - b)
    : [-1];
};