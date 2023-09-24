const solution = (numbers) => {
  return Array(10)
    .fill(0)
    .map((_, i) => i)
    .reduce((a, b) => {
      return numbers.includes(b) ? a : (a += b);
    }, 0);
};
