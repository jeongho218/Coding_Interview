const solution = (hp) => {
  let count = 0;

  if (hp >= 5) {
    count += ~~(hp / 5);
    hp = hp % 5;
  }
  if (hp >= 3) {
    count += ~~(hp / 3);
    hp = hp % 3;
  }
  if (hp >= 1) {
    count += hp;
  }

  return count;
};