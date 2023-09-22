const solution = (my_string, m, c) => {
  let answer = [];

  for (i = 0; i < my_string.length; i += m) {
    answer.push(my_string.split("").splice(i, m));
  }

  return answer.reduce((a, b) => {
    return a + b[c - 1];
  }, "");
};