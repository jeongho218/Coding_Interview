const solution = (num_list, n) => {
  let toFront = num_list.splice(n);
  num_list.map((v) => toFront.push(v));
  return toFront;
};