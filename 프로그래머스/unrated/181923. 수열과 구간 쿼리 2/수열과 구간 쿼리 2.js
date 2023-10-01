const solution = (arr, queries) => {
  return queries.map((v) => {
    let tmp = arr.reduce((a, b, idx) => {
      return idx >= v[0] && idx <= v[1] && b > v[2] ? [...a, b] : a;
    }, []);
    return tmp.length === 0 ? -1 : Math.min(...tmp);
  });
};