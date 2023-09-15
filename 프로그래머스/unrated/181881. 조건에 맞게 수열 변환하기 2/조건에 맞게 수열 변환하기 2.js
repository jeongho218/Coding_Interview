const solution = (arr) => {
  if (
    arr.join("") ===
    arr
      .reduce((result, v) => {
        if (v >= 50 && v % 2 === 0) {
          result.push(v / 2);
        } else if (v < 50 && v % 2 === 1) {
          result.push(v * 2 + 1);
        } else {
          result.push(v);
        }
        return result;
      }, [])
      .join("")
  ) {
    return 0;
  }

  let count = 0;

  while (
    arr.join("") !==
    arr
      .reduce((result, v) => {
        if (v >= 50 && v % 2 === 0) {
          result.push(v / 2);
        } else if (v < 50 && v % 2 === 1) {
          result.push(v * 2 + 1);
        } else {
          result.push(v);
        }
        return result;
      }, [])
      .join("")
  ) {
    // while 조건문 끝나고
    // 적용할 내용이 들어갈 공간
    arr = arr.map((num) => {
      if (num >= 50 && !(num % 2)) return num / 2;
      if (num < 50 && num % 2) return num * 2 + 1;
      return num;
    });

    count += 1;
    // console.log(count);
    // console.log(arr);

    if (
      arr.join("") ===
      arr
        .reduce((result, v) => {
          if (v >= 50 && v % 2 === 0) {
            result.push(v / 2);
          } else if (v < 50 && v % 2 === 1) {
            result.push(v * 2 + 1);
          } else {
            result.push(v);
          }
          return result;
        }, [])
        .join("")
    ) {
      return count;
    }
  }
};