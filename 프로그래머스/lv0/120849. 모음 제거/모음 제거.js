const solution = (my_string) => {
  let arr = [...my_string];

  for (i = 0; i < arr.length; i++) {
    // console.log(i);
    // console.log(arr[i]);

    if (arr[i] === "a") {
      arr.splice(i, 1);
      i--;
    } else if (arr[i] === "e") {
      arr.splice(i, 1);
      i--;
    } else if (arr[i] === "i") {
      arr.splice(i, 1);
      i--;
    } else if (arr[i] === "o") {
      arr.splice(i, 1);
      i--;
    } else if (arr[i] === "u") {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr.join("");
};