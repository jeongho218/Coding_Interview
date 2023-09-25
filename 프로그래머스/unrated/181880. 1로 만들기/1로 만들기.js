const solution = (num_list) => {
  const calculation = (n) => {
    let count = 0;
    while (n !== 1) {
      n % 2 ? (n = (n - 1) / 2) : (n = n / 2);
      count++;

      if (n === 1) {
        return count;
      }
    }
    return count;
  };

  return num_list.reduce((a, b) => {
    return (a += calculation(b));
  }, 0);
};