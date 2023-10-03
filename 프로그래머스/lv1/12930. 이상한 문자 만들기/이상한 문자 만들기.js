const solution = (s) => {
  return s
    .split(" ")
    .map((v) => {
      return v
        .split("")
        .map((v, i) => {
          return i % 2 === 0 ? (v = v.toUpperCase()) : (v = v.toLowerCase());
        })
        .join("");
    })
    .join(" ");
};