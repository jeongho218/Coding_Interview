const solution = (arr, queries) => {
  return arr.map((v, i) => {
    for (j = 0; j < queries.length; j++) {
      if (i >= queries[j][0] && i <= queries[j][1] && i % queries[j][2] === 0) {
        v += 1;
      }
    }
    return v;
  });
};