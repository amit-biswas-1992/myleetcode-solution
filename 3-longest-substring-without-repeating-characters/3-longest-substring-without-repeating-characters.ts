function lengthOfLongestSubstring(s: string): number {
    let windowStart = 0
    let charIndexMap : Map<string,number> = new Map()
    
    let longestSubstringLength = 0
    
    for(let windowEnd=0;windowEnd<s.length;windowEnd++){
        
        let char = s[windowEnd]
        
        if(charIndexMap.has(char)){
            windowStart = Math.max(windowStart,charIndexMap.get(char)+1)
            
        }
                        
        longestSubstringLength = Math.max(longestSubstringLength,windowEnd-windowStart+1)
        
        
        charIndexMap.set(char,windowEnd)

    }
    
    
    return longestSubstringLength

};