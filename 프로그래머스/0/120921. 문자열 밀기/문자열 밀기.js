const solution = (A, B) => {
  if (A === B) return 0;
  else {
    let answer = 0;

    while (A !== B) {
      A = A.slice(-1) + A.slice(0, A.length - 1);
      if (answer === A.length) return -1;
      answer += 1;
    }
    return answer;
  }
};