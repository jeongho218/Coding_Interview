const solution = (s) => {
  let listToRemove = [];
  let arr = [...s].sort();

  for (i = 0; i < arr.length; i++) {
    if (arr.slice(i + 1).includes(arr[i])) {
      listToRemove.push(arr[i]);
    }
  }

  return arr.filter((v) => (listToRemove.includes(v) ? "" : v)).join("");
};