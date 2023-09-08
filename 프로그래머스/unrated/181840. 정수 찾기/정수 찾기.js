const solution = (num_list, n) => {
  let answer = 0;

  for (i = 0; i < num_list.length; i++) {
    if (num_list[i] === n) {
      return (answer = 1);
    }
  }

  return answer;
};