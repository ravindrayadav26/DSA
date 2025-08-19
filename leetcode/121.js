// ?Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    let diff = prices[i] - min;
    if (diff > max) {
      max = prices[i] - min;
    }
  }
  return max;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
