const solution = (lines) => {
  const [first, second, third] = lines.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else return a[0] - b[0];
  });

  let ab = [];
  for (i = first[0]; i <= first[1]; i++) {
    if (i >= second[0] && i <= second[1]) {
      ab.push(i);
    }
  }

  let ac = [];
  for (i = first[0]; i <= first[1]; i++) {
    if (i >= third[0] && i <= third[1]) {
      ac.push(i);
    }
  }

  let bc = [];
  for (i = second[0]; i <= second[1]; i++) {
    if (i >= third[0] && i <= third[1]) {
      bc.push(i);
    }
  }

  let answer = [ab, ac, bc];

  let 중복 = [];
  for (
    i = Math.min(...[...ab, ...ac, ...bc]);
    i <= Math.max(...[...ab, ...ac, ...bc]);
    i++
  ) {
    if (ab.includes(i) && ac.includes(i) && bc.includes(i)) {
      중복.push(i);
    }
  }

  let print = 0;
  if (중복.length > 1) {
    for (i = 0; i < answer.length; i++) {
      if (answer[i].length > 1) {
        print += answer[i].length - 1;
      }
    }
    return print - (중복.length - 1) * 2;
  } else {
    for (i = 0; i < answer.length; i++) {
      if (answer[i].length > 1) {
        print += answer[i].length - 1;
      }
    }
    return print;
  }
};