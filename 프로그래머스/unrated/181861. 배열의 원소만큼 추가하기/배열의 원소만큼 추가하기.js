const solution = (arr) => {
  return arr.reduce((a, b) => {
    for (i = 1; i <= b; i++) {
      a.push(b);
    }
    return a;
  }, []);
};