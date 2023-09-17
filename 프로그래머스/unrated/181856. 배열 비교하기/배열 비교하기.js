const solution = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  } 
  else {
    let arr1Sum = arr1.reduce((a, b) => {
      return a + b;
    }, 0);
    let arr2Sum = arr2.reduce((a, b) => {
      return a + b;
    }, 0);
    return arr1Sum > arr2Sum ? 1 : arr1Sum < arr2Sum ? -1 : 0;
  }
};
