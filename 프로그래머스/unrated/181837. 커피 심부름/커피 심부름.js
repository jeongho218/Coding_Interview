const solution = (order) => {
  return order.reduce((a, b) => {
    return b.includes("americano") || b.includes("anything")
      ? (a += 4500)
      : (a += 5000);
  }, 0);
};