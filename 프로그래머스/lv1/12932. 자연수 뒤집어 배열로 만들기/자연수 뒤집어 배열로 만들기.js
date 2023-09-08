const solution = (n) => {
  let answer = [];
  let a = (n + "").split("");

  for (i = a.length - 1; i >= 0; i--) {
    // 정수로 다시 변환 Number
    b = Number(a[i]);

    // 배열에 넣기 push
    answer.push(b);
  }
  return answer;
};