const solution = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    // 배열의 길이가 다르다면
    return arr1.length > arr2.length ? 1 : -1;
  } // 배열의 길이가 같다면
  else {
    return arr1.reduce((a, b) => {
      return a + b;
    }, 0) >
      arr2.reduce((a, b) => {
        return a + b;
      }, 0)
      ? 1
      : arr1.reduce((a, b) => {
          return a + b;
        }, 0) <
        arr2.reduce((a, b) => {
          return a + b;
        }, 0)
      ? -1
      : 0;
  }
};