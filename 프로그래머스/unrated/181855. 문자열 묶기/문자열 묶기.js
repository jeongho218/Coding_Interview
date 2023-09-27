const solution = (strArr) => {
  let arr = Array(strArr.length).fill(0);
  strArr.forEach((v) => {
    return (arr[v.length] += 1);
  });

  return Math.max(...arr);
};