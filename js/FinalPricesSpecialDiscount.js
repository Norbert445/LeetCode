"use strict";
function finalPrices(prices) {
    let i;
    let j;
    for (i = 0; i < prices.length; i++) {
        for (j = i + 1; j < prices.length; j++) {
            if (prices[i] >= prices[j]) {
                prices[i] -= prices[j];
                break;
            }
        }
    }
    return prices;
}
console.log(finalPrices([8, 4, 6, 2, 3]));
