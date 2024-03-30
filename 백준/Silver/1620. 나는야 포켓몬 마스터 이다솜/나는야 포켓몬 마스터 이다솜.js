let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input.shift().split(' ');

let pokemon = input.splice(0, N);

let numObj = {};
let nameObj = {};
for (i = 0; i < pokemon.length; i++) {
  numObj[i + 1] = pokemon[i];
  nameObj[pokemon[i]] = i + 1;
}

let answer = '';
for (j = 0; j < input.length; j++) {
  if (nameObj[input[j]]) {
    answer += `${nameObj[input[j]]}\n`;
  } else {
    answer += `${numObj[input[j]]}\n`;
  }
}

console.log(answer);
