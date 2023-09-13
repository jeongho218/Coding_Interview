const solution = (my_string, letter) => {
  let arr = [...my_string];
  let a = [];
  arr.forEach((element) => {
    if (element !== letter) {
      a.push(element);
    }
  });
  return a.join("");
};