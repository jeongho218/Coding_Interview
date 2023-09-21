const solution = (s) => {
  let a = [];
  a.push(
    Math.min(...s.split(" ").map((v) => parseInt(v))),
    Math.max(...s.split(" ").map((v) => parseInt(v)))
  );

  return a.join(" ");
};