const solution = (numLog) => {
  cal = {
    "+1": "w",
    "-1": "s",
    "+10": "d",
    "-10": "a",
  };

  return numLog
    .reduce((a, b, i) => {
      return b < numLog[i + 1]
        ? a + cal[`+${numLog[i + 1] - b}`]
        : a + cal[`-${b - numLog[i + 1]}`];
    }, "")
    .replace(undefined, "");
};