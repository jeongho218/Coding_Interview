const solution = (my_string) => {
  let arr = my_string.split(" ");
  let plus = [`${arr[0]}`];
  let minus = [];

  for (i = 1; i < arr.length; i += 2) {
    arr[i] === "+" ? plus.push(arr[i + 1]) : minus.push(arr[i + 1]);
  }

  return (
    plus.reduce((a, b) => {
      return (a += +b);
    }, 0) -
    minus.reduce((a, b) => {
      return (a += +b);
    }, 0)
  );
};