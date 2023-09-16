const solution = (myString, pat) => {
  return +[...myString]
    .map((v) => {
      return v === "A" ? (v = "B") : (v = "A");
    })
    .join("")
    .includes(pat);
};