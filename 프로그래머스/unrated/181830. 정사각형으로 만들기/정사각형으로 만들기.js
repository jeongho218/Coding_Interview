const solution = (arr) => {
  if (arr.length > arr[0].length) {
    for (i = arr[0].length; i < arr.length; i++) {
      arr.forEach((v) => v.push(0));
    }
    return arr;
  } else if (arr.length < arr[0].length) {
    for (i = arr.length; i < arr[0].length; i++) {
      arr.push(Array(arr[0].length).fill(0));
    }
    return arr;
  } else {
    return arr;
  }
};