const solution = (n) => {
  let answer = [];
  for (i = 0; i < n; i++) {
    answer.push(new Array(n));
  }

  let [x, y] = [0, 0];
  let [infimum, supremum] = [0, n];

  for (number = 1; number <= n ** 2; number++) {
    answer[x][y] = number;
    if (x === infimum && y !== supremum - 1) {
      y += 1;
    } else if (y === supremum - 1 && x < supremum - 1) {
      x += 1;
    } else if (x === supremum - 1 && y > infimum) {
      y -= 1;
    } else if (x === supremum - 1 && y === infimum) {
      supremum -= 1;
      infimum += 1;
      x -= 1;
    } else if (x > infimum && y === infimum - 1) {
      x -= 1;
    }
  }

  return answer;
};