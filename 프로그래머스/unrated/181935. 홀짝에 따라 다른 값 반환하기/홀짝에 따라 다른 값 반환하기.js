const solution = (n) => {
  let answer = 0;

  const calOdd = (n) => {
    for (i = 1; i <= n; i += 2) {
      answer += i;
      console.log(answer);
    }
    return answer;
  };

  const calEven = (n) => {
    for (i = 2; i <= n; i += 2) {
      answer += i * i;
    }
    return answer;
  };


  return n % 2 ? calOdd(n) : calEven(n);
};