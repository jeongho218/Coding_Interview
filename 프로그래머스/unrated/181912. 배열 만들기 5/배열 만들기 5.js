const solution = (intStrs, k, s, l) => {
  return intStrs
    .map((v) => {
      let test = +v.substr(s, l);
      return test > k ? test : "";
    })
    .filter((v) => v);
};
