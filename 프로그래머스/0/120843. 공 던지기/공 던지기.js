const solution = (numbers, k) => {
  let arr = new Array(k * 2 + 1);
  for (i = 0; i < arr.length; i++) {
    arr[i] = numbers[i % numbers.length];
  }
  return arr.reverse()[2];
};