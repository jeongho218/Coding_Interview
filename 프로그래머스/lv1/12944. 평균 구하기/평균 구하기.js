function solution(arr) {
  var answer = 0;
  const qu = arr.length;

  for (i = 0; i < qu; i++) {
    answer += arr[i];
  }

  answer /= qu;

  return answer;
}
