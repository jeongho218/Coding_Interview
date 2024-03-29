let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, M] = input.shift().split(" ");

let siteListForFound = input.splice(N);

let siteObj = {};
const addToObj = (address, password) => {
  siteObj[address] = password;
};

for (i = 0; i < input.length; i++) {
  let [address, password] = input[i].split(" ");
  addToObj(address, password);
}

let answer = "";
for (j = 0; j < siteListForFound.length; j++) {
  if (siteListForFound[j] in siteObj) {
    answer += `${siteObj[siteListForFound[j]]}\n`;
  }
}

console.log(answer);