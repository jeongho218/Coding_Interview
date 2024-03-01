  const solution = (babbling) => {
    let possible = ["aya", "ye", "woo", "ma"];
    const replace = (givenWord) => {
      for (j = 0; j < possible.length; j++) {
        while (givenWord.includes(possible[j])) {
          givenWord = givenWord.replace(possible[j], " ");
        }
      }
      return givenWord;
    };

    const removeBlank = (blank) => {
      while (blank.includes(" ")) {
        blank = blank.replace(" ", "");
      }
      return blank;
    };

    return babbling
      .map((v) => replace(v))
      .map((v) => removeBlank(v))
      .reduce((acc, cur) => (cur === "" ? (acc += 1) : acc), 0);
  };