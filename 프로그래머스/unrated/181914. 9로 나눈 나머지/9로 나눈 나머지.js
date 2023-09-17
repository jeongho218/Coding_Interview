const solution = (number) => {
  return (
    number.split("").reduce((a, b) => {
      return a + +b;
    }, 0) % 9
  );
};