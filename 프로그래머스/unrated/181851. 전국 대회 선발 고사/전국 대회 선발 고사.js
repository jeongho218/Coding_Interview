const solution = (rank, attendance) => {
  let answer = rank
    .filter((v, i) => {
      return attendance[i] ? v : false;
    })
    .sort((a, b) => a - b)
    .slice(0, 3)
    .map((v, i) => {
      return rank.indexOf(v);
    });

  return answer[0] * 10000 + answer[1] * 100 + answer[2];
};
