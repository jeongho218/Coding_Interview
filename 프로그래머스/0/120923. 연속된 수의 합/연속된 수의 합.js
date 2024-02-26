const solution = (num, total) => {
  let start = -49;
  let result = ['element'];
  while (result.reduce((acc, cur) => (acc += cur), 0) !== total) {
    result = [];
    for (i = 0; i < num; i++) {
      result.push(start + i);
    }
    start += 1;
  }
  return result;
};