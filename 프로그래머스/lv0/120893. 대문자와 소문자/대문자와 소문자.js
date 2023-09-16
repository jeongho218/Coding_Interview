const solution = (my_string) => {
  return my_string
    .split("")
    .map((a) => {
      return a === a.toLowerCase() ? a.toUpperCase() : a.toLowerCase();
    })
    .join("");
};