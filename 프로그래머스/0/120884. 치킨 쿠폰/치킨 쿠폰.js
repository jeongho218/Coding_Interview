const solution = (chicken) => {
  let coupon = chicken;
  let service = 0;
  while (coupon >= 10) {
    let order = Math.floor(coupon / 10);
    let leftCoupon = coupon % 10;
    service += order;
    coupon = leftCoupon + order;
  }
  return service;
};