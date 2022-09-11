function partitionString(s: string): number {
    
    let j = 0
    
    let substringCount = 1
    let set = new Set<string>()
    
    for(let i=0;i<s.length;i++){
        
        if(!set.has(s[i])){
            set.add(s[i])
        }
        else{
            set.clear()
            set.add(s[i])
            substringCount++
        }
    }
    
    return substringCount

};