let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
[a, c] = input.map((v) => v.split(" ").map((w) => Number(w)));

console.log(`${c[0] - a[2]} ${c[1] / a[1]} ${c[2] - a[0]}`);
