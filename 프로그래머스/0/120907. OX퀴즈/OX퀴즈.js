const solution = (quiz) => {
  let answer = [];
  quiz.forEach((v) => {
    let [X, 연산자, Y, 등호, Z] = v.split(" ");
    answer.push(
      연산자 === "+"
        ? Number(X) + Number(Y) === Number(Z)
          ? "O"
          : "X"
        : Number(X) - Number(Y) === Number(Z)
        ? "O"
        : "X"
    );
  });
  return answer;
};