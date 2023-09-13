const solution = (my_string, letter) => {
  let arr = [];
  [...my_string].forEach((element) => {
    if (element !== letter) {
      arr.push(element);
    }
  });
  return arr.join("");
};
