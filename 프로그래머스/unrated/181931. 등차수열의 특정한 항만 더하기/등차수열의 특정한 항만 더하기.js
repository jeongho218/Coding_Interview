const solution = (a, d, included) => {
  let answer = 0;
  for (i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a;
    }
    a += d;
  }
  return answer;
};