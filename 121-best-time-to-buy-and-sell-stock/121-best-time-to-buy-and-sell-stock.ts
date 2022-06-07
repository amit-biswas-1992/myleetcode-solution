function maxProfit(prices: number[]): number {
    let minPrice = Infinity
    let maxProfit = 0
    
    
    for(let i=0;i<prices.length;i++){
        maxProfit = Math.max(maxProfit,prices[i]-minPrice)
        minPrice = Math.min(minPrice,prices[i])
    }
    
    return maxProfit
};