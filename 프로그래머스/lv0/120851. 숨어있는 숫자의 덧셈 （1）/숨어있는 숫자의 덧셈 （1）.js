const solution = (my_string) => {
  let answer = 0;
  [...my_string].forEach((element) => {
    if (Number(element)) answer += Number(element);
  });

  return answer;
};
