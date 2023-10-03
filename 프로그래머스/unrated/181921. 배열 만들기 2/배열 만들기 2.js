const solution = (l, r) => {
  let answer = [];
  for (i = 1; i <= 63; i++) {
    let tmp = i.toString(2) * 5;
    if (l <= tmp && tmp <= r) {
      answer.push(tmp);
    }
  }

  return answer.length === 0 ? [-1] : answer;
};