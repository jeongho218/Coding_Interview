const solution = (arr) => {
  let answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);

  return arr.indexOf(2) === -1 ? [-1] : answer;
};