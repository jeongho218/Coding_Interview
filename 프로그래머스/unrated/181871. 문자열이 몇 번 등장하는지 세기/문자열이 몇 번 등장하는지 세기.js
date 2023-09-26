const solution = (myString, pat) => {
  let arr = [];
  for (i = 0; i <= myString.length - pat.length; i++) {
    arr.push(myString.substr(i, pat.length));
  }
  return arr.filter((v) => v === pat).length;
};