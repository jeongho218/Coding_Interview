const solution = (n_str) => {
  let odd = n_str
    .filter((v, i) => {
      if (i % 2 === 0) return v;
    })
    .reduce((a, b) => a + b, 0);

  let even = n_str
    .filter((v, i) => {
      if (i % 2 === 1) return v;
    })
    .reduce((a, b) => a + b, 0);

  return odd > even ? odd : even;
};