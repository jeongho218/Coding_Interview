const solution = (num_list) => {
  if (num_list.reverse()[0] > num_list[1]) {
    let push = num_list[0] - num_list[1];
    num_list.unshift(push);
    return num_list.reverse();
  } else {
    let push = num_list[0] * 2;
    num_list.unshift(push);
    return num_list.reverse();
  }
};