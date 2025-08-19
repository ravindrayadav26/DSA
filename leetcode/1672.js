/**
 * @param {number[][]} accounts
 * @return {number}
 */
// ?Richest Customer Wealth
var maximumWealth = function (accounts) {
  const m = accounts.length;
  let max_wealth = 0;

  for (let i = 0; i < m; i++) {
    const n = accounts[i].length;
    let accountSum = 0; //+0 +1 
    for (let j = 0; j < n; j++) {
      accountSum += accounts[i][j];
    }
    if (accountSum > max_wealth) {
      max_wealth = accountSum;
    }
  }
  return max_wealth
};

const accounts = [
  [1, 2, 3],
  [3, 12, 1],
  [4, 1, 5],
];

console.log(maximumWealth(accounts));