const solution = (arr) => {
  return arr.filter((v, i) => {
    return v === arr[i - 1] ? false : true;
  });
};