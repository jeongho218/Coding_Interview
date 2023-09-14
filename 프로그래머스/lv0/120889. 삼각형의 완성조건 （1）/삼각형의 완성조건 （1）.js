const solution = (sides) => {
  let max = Math.max(...sides);
  
  let others = sides.reduce((a, b) => {
    return a + b;
  }, 0);

  return max < others - max ? 1 : 2;
};