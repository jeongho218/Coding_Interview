const solution = (q, r, code) => {
  return code.split("").reduce((a, b, i) => {
    return i % q === r ? (a += b) : a;
  }, "");
};