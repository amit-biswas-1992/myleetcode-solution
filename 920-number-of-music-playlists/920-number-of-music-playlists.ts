function numMusicPlaylists(n: number, goal: number, k: number): number {
    let map = new Map<string,number>()
    return recursive(n,goal,k,0,0,map)
};


function recursive(n: number, goal: number, k: number, numUsed: number, uniqueUsed: number, map: Map<string,number>):number{
    
    if(numUsed==goal){
        return  uniqueUsed==n? 1 : 0 
    }
    
    //key should be current unique and current total number tkane
    let key = numUsed + "," + uniqueUsed
    
    if(map.has(key)) return map.get(key)
        
    let mod = 1e9 + 7
        
    
    // take previously used number, no increase on unique Count
    // # of ways to take old number = uniqueUsed
    // but we should not take all uniqueUsed number as we can repeat number after k times
    // # of ways we can take max = unique count - k
    // I cannot take unique number until it is less k as I cannot repeat before getting k unique number
    let taken = (recursive(n,goal,k,numUsed+1,uniqueUsed,map) * Math.max(0,(uniqueUsed-k))) %mod
    
    //take new number: increase on unique count, # of ways to take new number : total number - unique Already used count 
    let notTaken = (recursive(n,goal,k,numUsed+1,uniqueUsed+1,map) * (n-uniqueUsed))%mod
    
    map.set(key,taken + notTaken)
    return map.get(key)
}