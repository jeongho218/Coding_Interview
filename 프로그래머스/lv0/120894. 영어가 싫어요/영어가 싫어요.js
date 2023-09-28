const solution = (my_string) => {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numbers.forEach((v, i) => {
    my_string = my_string.replaceAll(v, i);
  });

  return +my_string;
};