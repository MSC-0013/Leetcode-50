// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < min) min = prices[i];
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};
