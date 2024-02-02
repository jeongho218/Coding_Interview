const solution = (a, b, c, d) => {
  let arr = [a, b, c, d];
  arr.sort((a, b) => a - b);

  // 조건 1.
  // 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점
  if (arr[0] === arr[3]) {
    return 1111 * arr[0];
  }
  // 조건 2.
  // 세 주사위에서 나온 숫자가 p로 같고
  // 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점
  // [1, 4, 4, 4]
  // [2, 2, 2, 5]
  else if (arr[0] !== arr[1] && arr[1] === arr[3]) {
    return (10 * arr[1] + arr[0]) ** 2;
  } else if (arr[0] === arr[2] && arr[0] !== arr[3]) {
    return (10 * arr[0] + arr[3]) ** 2;
  }
  // 조건 3.
  // 주사위가 두 개씩 같은 값이 나오고,
  // 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점
  else if (arr[0] === arr[1] && arr[2] === arr[3]) {
    return (arr[0] + arr[2]) * Math.abs(arr[2] - arr[0]);
  }
  // 조건 4.
  // 어느 두 주사위에서 나온 숫자가 p로 같고
  // 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점
  // [2, 2, 5, 6]
  else if (arr[0] === arr[1] && arr[2] !== arr[3]) {
    return arr[2] * arr[3];
  }
  // [2, 4, 5, 5]
  else if (arr[0] !== arr[1] && arr[2] === arr[3]) {
    return arr[0] * arr[1];
  }
  // [2, 4, 4, 5]
  else if (arr[1] === arr[2] && arr[0] !== arr[3]) {
    return arr[0] * arr[3];
  }
  // 조건 5.
  // 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수
  else return arr[0];
};