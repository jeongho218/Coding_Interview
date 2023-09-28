const solution = (my_str, n) => {
  let answer = [];
  for (i = 0; i < my_str.length; i += n) {
    answer.push(my_str.substr(i, n));
  }
  return answer;
};