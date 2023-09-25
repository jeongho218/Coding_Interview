const solution = (myString, pat) => {
  return Array(myString.length)
    .fill()
    .map((_, i) => {
      return myString.substr(0, i + 1);
    })
    .filter((v) => v.endsWith(pat))
    .sort((a, b) => b.length - a.length)[0];
};