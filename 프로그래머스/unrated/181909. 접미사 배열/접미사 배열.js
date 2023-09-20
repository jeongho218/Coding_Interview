const solution = (my_string) => {
  let a = [];
  for (i = 1; i <= my_string.length; i++) {
    a.push(my_string.slice(-i));
  }

  return a.sort();
};