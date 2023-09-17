const solution = (strArr) => {
  return strArr.filter((a) => {
    return !a.includes("ad");
  });
};