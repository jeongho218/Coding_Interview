const solution = (A, B) => {
  let a = A.sort((a, b) => b - a);
  let b = B.sort((a, b) => a - b);

  return A.reduce((acc, cur, idx) => {
    return (acc += cur * B[idx]);
  }, 0);
};