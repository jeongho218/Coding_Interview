const solution = (picture, k) => {
  return picture.reduce((acc, cur) => {
    let tmp = cur
      .split("")
      .map((v) => {
        return v.repeat(k);
      })
      .join("");
    for (i = 0; i < k; i++) acc.push(tmp);
    return acc;
  }, []);
};