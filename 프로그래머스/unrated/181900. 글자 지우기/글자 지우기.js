const solution = (my_string, indices) => {
  return my_string
    .split("")
    .map((v, i) => {
      return indices.includes(i) ? "" : v;
    })
    .join("");
};