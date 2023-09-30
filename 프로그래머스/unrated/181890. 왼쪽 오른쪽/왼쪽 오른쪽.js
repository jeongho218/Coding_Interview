const solution = (str_list) => {
  let leftIndex = str_list.indexOf("l");
  let rightIndex = str_list.indexOf("r");

  // 왼쪽 오른쪽 모두 없다면 빈 배열
  if (leftIndex === -1 && rightIndex === -1) {
    return [];
  }

  // 왼쪽 오른쪽 모두 있으며 왼쪽이 먼저 나옴
  if (leftIndex < rightIndex && leftIndex !== -1) {
    return str_list.slice(0, leftIndex);
  }

  // 왼쪽 오른쪽 모두 있으며 오른쪽이 먼저 나옴
  if (leftIndex > rightIndex && rightIndex !== -1) {
    return str_list.slice(rightIndex + 1);
  }

  // 왼쪽 없고 오른쪽만 있음
  if (leftIndex === -1 && rightIndex >= 0) {
    return str_list.slice(rightIndex + 1);
  }

  // 오른쪽 없고 왼쪽만 있음
  if (rightIndex === -1 && leftIndex >= 0) {
    return str_list.slice(0, leftIndex);
  }
};