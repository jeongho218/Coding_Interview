const solution = (arr) => {
  let howMany = 1;
  while (arr.length > howMany) {
    if (arr.length <= howMany) {
      break;
    }
    howMany *= 2;
  }

  let answer = Array(howMany).fill(0);

  answer.splice(0, arr.length, ...arr);

  return answer;
};