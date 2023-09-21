const solution = (my_string) => {
  let answer = [];
  my_string.split("").forEach((element) => {
    if (!answer.includes(element)) {
      answer.push(element);
    }
  });
  return answer.join("");
};