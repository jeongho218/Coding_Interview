const solution = (my_string) => {
  let answer = Array(52).fill(0);

  let alphabet = [
    ...Array(26)
      .fill()
      .map((_, i) => String.fromCharCode(i + 65)),
    ...Array(26)
      .fill()
      .map((_, i) => String.fromCharCode(i + 97)),
  ];

  my_string.split("").forEach((v) => {
    answer[alphabet.indexOf(v)] += 1;
  });

  return answer;
};