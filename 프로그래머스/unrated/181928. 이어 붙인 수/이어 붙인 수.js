const solution = (num_list) => {
  let oddArray = [];
  let evenArray = [];
  for (i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 1) {
      oddArray.push(num_list[i]);
    } else {
      evenArray.push(num_list[i]);
    }
  }

  // console.log(oddArray);
  // console.log(evenArray);

  oddArray.reduce((a, b) => {
    return a + String(b);
  }, "");

  return (
    +oddArray.reduce((a, b) => {
      return a + String(b);
    }, "") +
    +evenArray.reduce((a, b) => {
      return a + String(b);
    }, "")
  );
};