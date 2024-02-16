const solution = (arr, k) => {
  let base = new Array(k).fill(-1);
  let save = [];
  arr.forEach((v) => (save.includes(v) ? v : save.push(v)));
  return base
    .map((w, i) => (w = save[i]))
    .map((x) => (x === undefined ? (x = -1) : x));
};