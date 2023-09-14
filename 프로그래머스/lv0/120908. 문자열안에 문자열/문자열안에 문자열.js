const solution = (str1, str2) => {
  if (str1.match(str2) === null) {
    return 2;
  } else {
    return 1;
  }
};