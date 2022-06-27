function lengthOfLongestSubstring(s: string): number {
    
    let map: Map<string,number> = new Map()
    
    let length = 0
    
    let windowStart = 0
    for(let windowEnd = 0;windowEnd<s.length;windowEnd++){
        
        let char = s[windowEnd]
        
        if(map.has(char)){
            windowStart = Math.max(windowStart,map.get(char)+1)
        }
        
        map.set(char,windowEnd)
        
        length = Math.max(length,windowEnd-windowStart+1)
        
        
    }
    
    return length
    
    
};