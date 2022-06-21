function coinChange(coins: number[], amount: number): number {
    let memo: number[][] = Array(coins.length+1).fill(-1).map( () => Array(amount+1).fill(-1))
    
    
    let ways = helper(coins,amount,0,memo)
    
    return ways == Infinity ? -1 : ways
};

function helper(coins: number[], amount: number, index: number, memo: number[][]){
    
    if(amount == 0){
        return 0
    } 
    
    if(index > coins.length-1) return Infinity
       
    
    
    if(memo[index][amount]!=-1) return memo[index][amount]
    
    let taken = Infinity
    if(coins[index]<=amount)
        taken = 1+ helper(coins,amount-coins[index],index,memo)
    
    
    let notTaken = helper(coins, amount, index+1, memo)
    
    memo[index][amount] = Math.min(taken,notTaken)
    
    return memo[index][amount]
}