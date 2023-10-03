const solution = (code) => {
  let ret = "";
  let mode = 0;
  for (i = 0; i <= code.length - 1; i++) {
    if (mode === 0 && i % 2 === 0 && code[i] !== "1") {
      ret += code[i];
    } else if (mode === 1 && i % 2 === 1 && code[i] !== "1") {
      ret += code[i];
    } else if (code[i] === "1") {
      mode ? (mode = 0) : (mode = 1);
    }
  }
  return ret.length === 0 ? "EMPTY" : ret;
};