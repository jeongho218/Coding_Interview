const solution = (score) => {
  score = score.map((v, i) => [v[0] + v[1], i]).sort((a, b) => b[0] - a[0]);

  for (i = 0; i < score.length; i++) {
    if (i === 0) {
      score[i] = [i + 1, score[i][0], score[i][1]];
    } else if (score[i][0] < score[i - 1][1]) {
      score[i] = [i + 1, score[i][0], score[i][1]];
    } else if (score[i][0] === score[i - 1][1]) {
      score[i] = [score[i - 1][0], score[i][0], score[i][1]];
    }
  }
  return score.sort((a, b) => a[2] - b[2]).map((v) => v[0]);
};