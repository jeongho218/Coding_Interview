const solution = (intStrs, k, s, l) => {
  return intStrs
    .map((v) => {
      return +v.substr(s, l) > k ? +v.substr(s, l) : "";
    })
    .filter((v) => v);
};