const solution = (str_list, ex) => {
  return str_list
    .filter((v) => {
      return !v.includes(ex);
    })
    .join("");
};