const solution = (price, money, count) => {
  let totalPrice = 0;
  for (i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  let result = totalPrice - money;

  return result > 0 ? result : 0;
};