const solution = (money) => {
  if (money < 5500) {
    return [0, money];
  } else {
    let howMany = parseInt(money / 5500);
    let change = money - 5500 * howMany;
    return [howMany, change];
  }
};