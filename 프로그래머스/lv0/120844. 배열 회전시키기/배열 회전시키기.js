const solution = (numbers, direction) => {
  if (direction === "right") {
    let a = numbers.splice(numbers.length - 1, 1);
    numbers.unshift(...a);
    return numbers;
  } else {
    let a = numbers.splice(0, 1);
    numbers.push(...a);

    return numbers;
  }
};