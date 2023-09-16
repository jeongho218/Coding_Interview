const solution = (my_string) =>
  my_string
    .replaceAll("   ", " ")
    .replaceAll("  ", " ")
    .split(" ")
    .filter((v) => v !== "");