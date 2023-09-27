const solution = (strArr) => {
  let max = strArr.map((v) => {
    return (v = v.length);
  });

  let arr = Array(Math.max(...max) + 1).fill(0);

  strArr.forEach((v) => {
    return (arr[v.length] += 1);
  });
  return Math.max(...arr);
};