const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = stdin.slice();
let [n, m] = input.shift().split(" ");
let sitesMyInfo = input.slice(0, n);
let shouldFindSites = input.slice(n, n + m);
sitesMyInfo = sitesMyInfo.map((x) => x.split(" "));

const sites = {};

sitesMyInfo.forEach((x, i) => {
  const URL = x[0];
  const password = x[1];

  if (!sites[URL]) {
    sites[URL] = password;
  }
});

shouldFindSites.forEach((site) => {
  console.log(sites[site]);
});
