const solution = (array, commands) => {
  let answer = [];
  commands.forEach((v, i) => {
    answer.push(array.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1]);
    return;
  });

  return answer;
};