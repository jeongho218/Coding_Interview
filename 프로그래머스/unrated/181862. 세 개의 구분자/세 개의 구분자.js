const solution = (myStr) => {
  let answer = myStr
    .replace(/[a-c]/g, " ")
    .split(" ")
    .filter((v) => v);
  return answer.join("") ? answer : ["EMPTY"];
};