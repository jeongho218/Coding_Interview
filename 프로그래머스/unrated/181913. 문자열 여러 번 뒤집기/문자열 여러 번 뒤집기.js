const solution = (my_string, queries) => {
  let arr = my_string.split("");

  for (i = 0; i < queries.length; i++) {
    let first = arr.slice(0, queries[i][0]);
    let second = arr.slice(queries[i][0], queries[i][1] + 1).reverse();
    let third = arr.slice(queries[i][1] + 1);

    arr = [...first, ...second, ...third];
  }

  return arr.join("");
};