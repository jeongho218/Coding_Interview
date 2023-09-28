const solution = (n) => {
  let answer = [];

  for (i = 2; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }

  if (answer.length === 0) {
    return [n];
  } else {
    return answer.filter((v) => {
      for (i = 2; i <= Math.sqrt(v); i++) {
        if (v % i === 0) {
          return false;
        }
      }
      return true;
    });
  }
};