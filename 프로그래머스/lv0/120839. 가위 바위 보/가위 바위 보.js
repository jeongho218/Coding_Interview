const solution = (rsp) => {
  return [...rsp]
    .map((v) => {
      return v === "2" ? (v = "0") : v === "0" ? (v = "5") : (v = "2");
    })
    .join("");
};