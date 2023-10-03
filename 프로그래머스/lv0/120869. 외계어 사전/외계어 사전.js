const solution = (spell, dic) => {
  let word = spell.sort().join("");
  for (i = 0; i < dic.length; i++) {
    if (word === dic[i].split("").sort().join("")) {
      return 1;
    }
  }
  return 2;
};