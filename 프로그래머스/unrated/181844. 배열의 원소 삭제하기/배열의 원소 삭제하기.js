const solution = (arr, delete_list) => {
  return arr.filter((v) => {
    return !delete_list.includes(v);
  });
};