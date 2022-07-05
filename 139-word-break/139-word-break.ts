function wordBreak(s: string, wordDict: string[]): boolean {
    let set = new Set<string>()
    
    for(const word of wordDict){
        set.add(word)
    }
    
    let memo = {}
    
    return helper(s,0,set,memo)
       
};


function helper(s: string, start: number, set: Set<string>, memo: any): boolean{
    
    if(start>=s.length) return true
    
    if(start in memo)  return memo[start]
    
    
    for(let i=start+1;i<=s.length;i++){
        
        
        let substring = s.substring(start,i)
        
        if(set.has(substring) && helper(s,i,set,memo)){
            
            memo[start] = true
            return memo[start]
        }
                
    }
    
    memo[start] = false
    
    return memo[start]
}