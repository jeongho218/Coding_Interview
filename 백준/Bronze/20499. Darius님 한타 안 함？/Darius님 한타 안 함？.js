let fs = require('fs');
let [K, D, A] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('/')
  .map((v) => Number(v));
console.log(K + A < D || D === 0 ? 'hasu' : 'gosu');