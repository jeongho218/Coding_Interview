const solution = (dots) => {
  let horizontalPoint = dots.map((v) => v[0]);
  let verticalPoint = dots.map((v) => v[1]);

  let widthStart = Math.min(...horizontalPoint);
  let widthEnd = Math.max(...horizontalPoint);

  let lengthStart = Math.min(...verticalPoint);
  let lengthEnd = Math.max(...verticalPoint);

  let width =
    widthStart < 0 ? Math.abs(widthStart - widthEnd) : widthEnd - widthStart;

  let length =
    lengthStart < 0
      ? Math.abs(lengthStart - lengthEnd)
      : lengthEnd - lengthStart;

  return width * length;
};