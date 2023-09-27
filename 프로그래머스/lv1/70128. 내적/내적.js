const solution = (a, b) => {
  return a.reduce((누적값, 현재요소, 인덱스) => {
    return (누적값 += 현재요소 * b[인덱스]);
  }, 0);
};