const solution = (s) => {
  let n = ["("];
  let arr = s.split("");
  if (arr[0] === ")") {
    return false;
  } else {
    for (i = 1; i < arr.length; i++) {
      arr[i] === "(" ? n.push("(") : n.pop();
    }
    return n.length ? false : true;
  }
};