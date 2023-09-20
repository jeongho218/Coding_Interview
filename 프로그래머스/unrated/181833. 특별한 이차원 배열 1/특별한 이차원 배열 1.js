const solution = (n) => {
  let a = [[]];
  if (n === 1) {
    return [[1]];
  } else {
    for (i = 0; i < n; i++) {
      a[i] = [];
      for (j = 0; j < n; j++) {
        i === j ? a[i].push(1) : a[i].push(0);
      }
    }
  }
  return a;
};