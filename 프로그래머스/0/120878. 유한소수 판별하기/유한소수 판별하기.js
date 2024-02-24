const solution = (a, b) => {
  const 최대공약수 = (a, b) => {
    for (i = Math.min(a, b); i >= 1; i--) {
      if (a % i === 0 && b % i === 0) return i;
    }
  };
  let gcd = 최대공약수(a, b);

  a = a / gcd;
  b = b / gcd;

  let 소인수 = [];
  let 인수 = 2;
  while (b >= 2) {
    if (b % 인수 === 0) {
      소인수.push(인수);
      b /= 인수;
    } else {
      인수 += 1;
    }
  }
  return 소인수.filter((v) => v !== 2 && v !== 5).length === 0 ? 1 : 2;
};