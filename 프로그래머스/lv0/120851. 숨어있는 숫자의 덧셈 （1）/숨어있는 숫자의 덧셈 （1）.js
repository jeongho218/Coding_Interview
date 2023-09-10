const solution = (my_string) => {
  let answer = 0;
  [...my_string].forEach((element) => {
    Number(element) ? (answer += Number(element)) : false;
  });

  return answer;
};
