const solution = (array, height) => {
  let sum = 0;
  array.forEach((element) => {
    if (element > height) {
      sum += 1;
    }
  });

  return sum;
};