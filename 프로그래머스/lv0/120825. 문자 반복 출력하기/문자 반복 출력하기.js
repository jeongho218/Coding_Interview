const solution = (my_string, n) => {
  let a = [...my_string];
  let str = "";
  a.forEach((element) => (str += element.repeat(n)));
  return str;
};