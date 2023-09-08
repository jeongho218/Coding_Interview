const solution = (num_list) => {
  const arrOdd = [];
  const arrEven = [];
  for (i = 0; i < num_list.length; i++) {
    // console.log(num_list[i]);
    if (num_list[i] % 2 === 0) {
      arrEven.push(num_list[i]);
    } else {
      arrOdd.push(num_list[i]);
    }
  }

  const answer = [];
  answer.push(arrEven.length);
  answer.push(arrOdd.length);

  console.log(answer);

  return answer;
};