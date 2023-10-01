const solution = (sides) => {
  let answer = [];
  let bigOne = Math.max(...sides);
  let smallOne = Math.min(...sides);

  for (i = bigOne; i + smallOne > bigOne; i--) {
    answer.push(i);
  }

  for (i = bigOne + 1; i < bigOne + smallOne; i++) {
    answer.push(i);
  }

  return answer.length;
};