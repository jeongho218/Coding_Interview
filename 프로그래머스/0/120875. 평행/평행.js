const solution = (dots) => {
  dots.sort((a, b) => a[0] - b[0]);

  let [a, b, c, d] = dots;

  if ((b[1] - a[1]) / (b[0] - a[0]) === (d[1] - c[1]) / (d[0] - c[0])) {
    return 1;
  } else if ((c[1] - a[1]) / (c[0] - a[0]) === (d[1] - b[1]) / (d[0] - b[0])) {
    return 1;
  } else if ((d[1] - a[1]) / (d[0] - a[0]) === (c[1] - b[1]) / (c[0] - b[0])) {
    return 1;
  } else {
    return 0;
  }
};