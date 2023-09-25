const solution = (my_string) => {
  return my_string
    .replaceAll(/[a-zA-Z]/g, " ")
    .split(" ")
    .reduce((a, b) => {
      return (a += +b);
    }, 0);
};