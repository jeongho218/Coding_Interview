const solution = (age) => {
  let alphabet = "abcdefghij";

  return String(age)
    .split("")
    .reduce((a, b) => {
      return a + alphabet[Number(b)];
    }, "");
};