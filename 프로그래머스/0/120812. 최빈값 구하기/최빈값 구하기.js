const solution = (array) => {
  let element = [];
  let stack = [];

  for (i = 0; i < array.length; i++) {
    if (!element.includes(array[i])) {
      element.push(array[i]);
      stack.push([array[i], 1]);
    } else {
      stack[element.indexOf(array[i])][1] += 1;
    }
  }

  stack.sort((a, b) => b[1] - a[1]);
  if (stack.length === 1) {
    return stack[0][0];
  } else if (stack[0][1] === stack[1][1]) {
    return -1;
  } else {
    return stack[0][0];
  }
};