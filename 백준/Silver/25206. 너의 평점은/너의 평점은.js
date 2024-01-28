let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let 패스과목제외 = [];
input.forEach((v) => (v.split(' ')[2] !== 'P' ? 패스과목제외.push(v) : false));

let 학점총합 = 패스과목제외.reduce(
  (acc, cur) => (acc += Number(cur.split(' ')[1])),
  0,
);

let 학점곱하기과목평점의합 = 패스과목제외.reduce((acc, cur) => {
  let [과목, 학점, 등급] = cur.split(' ');
  let 과목평점 =
    등급 === 'A+'
      ? 학점 * 4.5
      : 등급 === 'A0'
        ? 학점 * 4.0
        : 등급 === 'B+'
          ? 학점 * 3.5
          : 등급 === 'B0'
            ? 학점 * 3.0
            : 등급 === 'C+'
              ? 학점 * 2.5
              : 등급 === 'C0'
                ? 학점 * 2.0
                : 등급 === 'D+'
                  ? 학점 * 1.5
                  : 등급 === 'D0'
                    ? 학점 * 1.0
                    : 학점 * 0.0;

  return (acc += 과목평점);
}, 0);

console.log((학점곱하기과목평점의합 / 학점총합).toFixed(6));