const solution = (polynomial) => {
  const 일차항 = [];
  const 상수항 = [];
  polynomial
    .split(" ")
    .filter((v) => v !== "+")
    .forEach((w) => (w.includes("x") ? 일차항.push(w) : 상수항.push(w)));

  const 일차항의합 = (배열) => {
    if (배열.length === 1 && 배열[0] === "x") {
      return "";
    } else {
      return 배열
        .map((v) => (v === "x" ? 1 : Number(v.split("x").filter((w) => w)[0])))
        .reduce((acc, cur) => (acc += cur));
    }
  };
  const 상수항의합 = (배열) => {
    return 배열.reduce((acc, cur) => (acc += Number(cur)), 0);
  };

  if (일차항.length > 0 && 상수항.length > 0) {
    return `${일차항의합(일차항)}x + ${상수항의합(상수항)}`;
  } else if (일차항.length > 0 && 상수항.length === 0) {
    return `${일차항의합(일차항)}x`;
  } else {
    return `${상수항의합(상수항)}`;
  }
};