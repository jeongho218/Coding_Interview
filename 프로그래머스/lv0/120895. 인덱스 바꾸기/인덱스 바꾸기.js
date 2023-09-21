const solution = (my_string, num1, num2) => {
  let a = my_string[num1];
  let b = my_string[num2];

  return (
    my_string.slice(0, num1) +
    b +
    my_string.slice(num1 + 1, num2) +
    a +
    my_string.slice(num2 + 1)
  );
};