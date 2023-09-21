const solution = (n) => {
  let answer = 0;
  for (i = 4; i <= n; i++) {
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        answer += 1;
        console.log(i, j);
        break;
      }
    }
  }

  return answer;
};