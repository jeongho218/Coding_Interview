const solution = (num) => {
  if (num === 1) return 0;
  for (i = 1; num !== 1; i++) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);

    if (num === 1) {
      return i;
    }

    if (i === 500) {
      return -1;
    }
  }
};