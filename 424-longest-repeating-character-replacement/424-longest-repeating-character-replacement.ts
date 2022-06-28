function characterReplacement(s: string, k: number): number {
    
    let windowStart = 0
    let maxCharCount = 0
    
    let charFrequency = new Map()
    
    let maxLength = 0
    
    for(let windowEnd=0;windowEnd<s.length;windowEnd++){
        
        let char = s[windowEnd]
        
        if(!charFrequency.has(char)){
            charFrequency.set(char,0)
        }
        
        let currentCharCount = charFrequency.get(char)
        currentCharCount++
        charFrequency.set(char,currentCharCount)
        maxCharCount = Math.max(maxCharCount,currentCharCount)
        
        let windowLength = windowEnd-windowStart+1
        
        if(windowLength-maxCharCount>k){
            
            let windowStartChar = s[windowStart]
            let startCharCount = charFrequency.get(windowStartChar)
            startCharCount--
            charFrequency.set(windowStartChar,startCharCount)
            windowStart++     
        }
        
        maxLength = Math.max(maxLength,windowEnd-windowStart+1)
    }
    
    return maxLength
};