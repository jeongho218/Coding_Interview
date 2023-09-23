const solution = (i, j, k) => {
  let arr = [];
  for (n = i; n <= j; n++) {
    if ((n + "").includes(k)) arr.push(n + "");
  }
  return arr
    .join("")
    .split("")
    .filter((v) => +v === k).length;
};