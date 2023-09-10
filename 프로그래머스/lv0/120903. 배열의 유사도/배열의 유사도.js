const solution = (s1, s2) => {
  let answer = 0;
  s1.forEach((s1El) => {
    s2.forEach((s2El) => {
      if (s1El === s2El) answer += 1;
    });
  });
  return answer;
};