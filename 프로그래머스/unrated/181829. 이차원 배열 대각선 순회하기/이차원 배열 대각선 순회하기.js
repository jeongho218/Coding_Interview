const solution = (board, k) => {
  let answer = 0;
  board.forEach((v, i) => {
    v.forEach((v, j) => {
      i + j <= k ? (answer += v) : "";
    });
  });
  return answer;
};