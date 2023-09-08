const solution = (a, b) => {
  let answer = 0;
  if (a < b) {
    for (i = a; i <= b; i++) {
      answer += i;
    }
    return answer;
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      answer += i;
    }
    return answer;
  } else {
    return a;
  }
};