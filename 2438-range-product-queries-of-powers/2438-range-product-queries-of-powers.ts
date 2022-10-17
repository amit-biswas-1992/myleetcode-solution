

function productQueries(n: number, queries: number[][]): number[] {
    
    let prefix = []
    let mod = 1000000007
    
    let current = 1
   
    for(let i=0;i<32;i++){
        if((n & (1<<i)) != 0){
            current *= 1<<i
            prefix.push(current)
        }
            
    }
    
    let result = []
    for(let [left,right] of queries){
        let leftValue = 1
        if(left>0) leftValue = prefix[left-1] 
        let value = (prefix[right]/leftValue)%mod
        result.push(value)
    }
    
    return result
    

};