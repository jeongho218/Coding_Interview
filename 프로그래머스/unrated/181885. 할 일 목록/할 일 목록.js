const solution = (todo_list, finished) => {
  let a = [];
  finished.forEach((v, i) => {
    return v === false ? a.push(todo_list[i]) : "";
  });
  return a;
};