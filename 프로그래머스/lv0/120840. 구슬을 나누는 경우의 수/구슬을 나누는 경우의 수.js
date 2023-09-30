const solution = (balls, share) => {
  const factorial = (n) => {
    let facResult = 1n;
    for (i = 2n; i <= n; i += 1n) {
      facResult *= i;
    }
    return facResult;
  };

  return factorial(balls) / (factorial(balls - share) * factorial(share));
};