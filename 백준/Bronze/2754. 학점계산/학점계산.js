let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
console.log(
  input === 'A+'
    ? 4.3
    : input === 'A0'
      ? '4.0'
      : input === 'A-'
        ? 3.7
        : input === 'B+'
          ? 3.3
          : input === 'B0'
            ? '3.0'
            : input === 'B-'
              ? 2.7
              : input === 'C+'
                ? 2.3
                : input === 'C0'
                  ? '2.0'
                  : input === 'C-'
                    ? 1.7
                    : input === 'D+'
                      ? 1.3
                      : input === 'D0'
                        ? '1.0'
                        : input === 'D-'
                          ? 0.7
                          : '0.0',
);