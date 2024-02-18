const solution = (keyinput, board) => {
  let [동쪽끝, 서쪽끝, 북쪽끝, 남쪽끝] = [
    Math.floor(board[0] / 2),
    -Math.floor(board[0] / 2),
    Math.floor(board[1] / 2),
    -Math.floor(board[1] / 2),
  ];

  let answer = [0, 0];
  for (i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right" && answer[0] !== 동쪽끝) {
      answer[0] += 1;
    } else if (keyinput[i] === "left" && answer[0] !== 서쪽끝) {
      answer[0] -= 1;
    } else if (keyinput[i] === "up" && answer[1] !== 북쪽끝) {
      answer[1] += 1;
    } else if (keyinput[i] === "down" && answer[1] !== 남쪽끝) {
      answer[1] -= 1;
    }
  }
  return answer;
};