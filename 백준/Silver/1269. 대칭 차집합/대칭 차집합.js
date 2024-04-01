let fs = require("fs");
let [lengthOfAandB, A, B] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arrA = A.split(" ");
let arrB = B.split(" ");

let objA = {};
for (k = 0; k < arrA.length; k++) {
  objA[arrA[k]] = arrA[k];
}

let objB = {};
for (l = 0; l < arrB.length; l++) {
  objB[arrB[l]] = arrB[l];
}

let answer = [];
for (i = 0; i < arrA.length; i++) {
  if (!objB[arrA[i]]) {
    answer.push(arrA[i]);
  }
}

for (j = 0; j < arrB.length; j++) {
  if (!objA[arrB[j]]) {
    answer.push(arrB[j]);
  }
}
console.log(answer.length);