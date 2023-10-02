const solution = (n, m) => {
  let bigOne = Math.max(...[n, m]);
  let smallOne = Math.min(...[n, m]);

  // 최대공약수
  let gcd = 1;
  for (i = smallOne; i > 1; i--) {
    if (smallOne % i === 0 && bigOne % i === 0) {
      gcd = i;
      break;
    }
  }

  // 최소공배수
  let lcm = (bigOne * smallOne) / gcd;

  return [gcd, lcm];
};