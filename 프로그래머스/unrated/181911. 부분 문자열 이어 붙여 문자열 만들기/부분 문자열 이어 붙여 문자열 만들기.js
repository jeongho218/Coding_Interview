const solution = (my_strings, parts) => {
  return parts
    .map((_, i) => {
      return my_strings[i].slice(parts[i][0], parts[i][1] + 1);
    })
    .join("");
};