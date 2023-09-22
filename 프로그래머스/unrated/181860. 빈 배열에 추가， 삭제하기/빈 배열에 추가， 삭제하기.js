const solution = (arr, flag) => {
  let answer = [];
  for (i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (j = 1; j <= arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    } else {
      for (j = 1; j <= arr[i]; j++) {
        answer.pop();
      }
    }
  }
  return answer;
};