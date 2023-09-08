const solution = (n, k) => {
  // n이 10보다 작을때
  if (n < 10) {
    return (answer = n * 12000 + k * 2000);
  } else {
    // n이 10보다 클 경우
    // n/10 한 값(a)을 k에서 빼고 k-=a
    let a = Math.floor(n / 10);

    k -= a;

    return (answer = n * 12000 + k * 2000);
  }
};
