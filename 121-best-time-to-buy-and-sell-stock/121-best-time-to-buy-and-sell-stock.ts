function maxProfit(prices: number[]): number {
    let minPrice = Infinity
    let maxProfit = 0
    let left = 0
    
    
    for(let i=1;i<prices.length;i++){
        
        if(prices[left]>prices[i]) left = i
        else{
            maxProfit = Math.max(maxProfit,prices[i]-prices[left])
        }
    }
    
    return maxProfit
};