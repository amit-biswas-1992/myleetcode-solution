function minimumMoney(transactions: number[][]): number {
    
    
    
    let total = 0
    let ans = 0
    let maxCostOfProfitableTransaction = 0
    let maxCashBackOfLosingTransaction = 0
    for(let transaction of transactions){
        if(transaction[0]>=transaction[1]){
            ans += transaction[0]-transaction[1]
            
            maxCashBackOfLosingTransaction = Math.max(maxCashBackOfLosingTransaction,transaction[1])
        }
        else{
            maxCostOfProfitableTransaction = Math.max(maxCostOfProfitableTransaction,transaction[0])
        }
        
        
    }
    
    
    
    
    let extra = 0
    if(maxCashBackOfLosingTransaction>maxCostOfProfitableTransaction){
        extra = maxCashBackOfLosingTransaction
    }
    else{
        extra = maxCostOfProfitableTransaction
    }
    
    return ans + extra

};