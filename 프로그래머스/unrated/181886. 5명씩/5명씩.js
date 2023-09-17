const solution = (names) => {
  return names.filter((v, i) => {
    return i % 5 === 0 ? v : "";
  });
};