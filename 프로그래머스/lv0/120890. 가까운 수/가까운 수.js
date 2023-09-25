const solution = (array, n) => {
  array.sort((a, b) => a - b);

  let distance = array.map((v) => {
    return Math.abs(v - n);
  });

  let smallest = Math.min(...distance);

  let index = distance.indexOf(smallest);

  return array[index];
};