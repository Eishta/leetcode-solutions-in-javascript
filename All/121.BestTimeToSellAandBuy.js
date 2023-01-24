// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
    let i = 1;
    let min = prices[0];
    let maxProfit = 0;
    while(i< prices.length){
        maxProfit = Math.max(maxProfit, prices[i] - min);
         min = Math.min(min, prices[i]);
        i++
    }
    return maxProfit
};