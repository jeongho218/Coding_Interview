const solution = (numbers) => {
  let first = Math.max(...numbers);
  // console.log(`최대값은 ${first}`);

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] === first) {
      // console.log(`${i + 1}번째 splice ${numbers}`);
      numbers.splice(i, 1);
      return first * Math.max(...numbers);
    }
  }
};