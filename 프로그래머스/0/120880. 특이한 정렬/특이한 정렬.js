const solution = (numlist, n) => {
  let answer = [];
  numlist.forEach((v) => answer.push([v, Math.abs(v - n)]));
  return answer
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return b[0] - a[0];
      } else {
        return a[1] - b[1];
      }
    })
    .map((v) => v[0]);
};