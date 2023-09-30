const solution = (arr1, arr2) => {
  return arr1.map((v, i) => {
    return v.map((y, j) => {
      return (y += arr2[i][j]);
    });
  });
};