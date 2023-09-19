const solution = (order) => {
  return [...(order + "")].reduce((a, b) => {
    return +b === 0 ? (a += 0) : +b % 3 === 0 ? (a += 1) : (a += 0);
  }, 0);
};