const solution = (absolutes, signs) => {
  return signs
    .map((v, i) => {
      return v === true ? absolutes[i] : absolutes[i] * -1;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
};