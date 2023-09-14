const solution = (s) => {
  let pCount = 0;
  let yCount = 0;
  s = s.toLowerCase();

  if (s.includes("p") || s.includes("y")) {
    for (i = 0; i < s.length; i++) {
      if (s[i] === "p") {
        pCount += 1;
      } else if (s[i] === "y") {
        yCount += 1;
      }
    } 
    return pCount === yCount ? true : false;
  } else {
    return true;
  }
};