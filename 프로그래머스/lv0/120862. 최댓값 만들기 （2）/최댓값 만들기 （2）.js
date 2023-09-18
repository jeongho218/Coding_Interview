const solution = (numbers) => {
  numbers.sort((a, b) => a - b);
  let mm = numbers[0] * numbers[1];
  let pp = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return mm > pp ? mm : pp;
};