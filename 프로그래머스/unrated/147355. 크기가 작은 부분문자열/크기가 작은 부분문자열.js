const solution = (t, p) => {
  let a = [];
  for (i = 0; i <= t.length - p.length; i++) {
    a.push(t.slice(i, p.length + i));
  }

  return a.reduce((acc, cur) => {
    return +cur <= +p ? (acc += 1) : acc;
  }, 0);
};