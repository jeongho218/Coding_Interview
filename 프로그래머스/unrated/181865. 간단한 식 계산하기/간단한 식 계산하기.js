const solution = (binomial) => {
  let a = +binomial.split(" ")[0];
  let op = binomial.split(" ")[1];
  let b = +binomial.split(" ")[2];

  return op === "+" ? a + b : op === "-" ? a - b : op === "*" ? a * b : a / b;
};