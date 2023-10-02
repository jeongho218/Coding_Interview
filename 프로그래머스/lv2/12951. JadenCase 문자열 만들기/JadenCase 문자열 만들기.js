const solution = (s) => {
  return s
    .toLowerCase()
    .split(" ")
    .map((v) => {
      return v ? v[0].toUpperCase() + v.slice(1) : "";
    })
    .join(" ");
};