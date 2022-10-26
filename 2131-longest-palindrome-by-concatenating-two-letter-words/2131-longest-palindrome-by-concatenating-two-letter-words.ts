function longestPalindrome(words: string[]): number {

    let map = new Map()
    
    let result = 0
    let equalStringPaired = 0
    for(let word of words){
        if(word[0]==word[1]){
            let freq = map.get(word) ?? 0
            if(freq>0){
                
                map.set(word,freq-1)
                result += 4
                equalStringPaired--
            }
            else{
                map.set(word,freq+1)
                equalStringPaired++
            }
        }
        else{
            let freq = map.get(word[1]+word[0]) ?? 0
            if(freq>0){
                map.set(word[1]+word[0],freq-1)
                result += 4
            }
            else{
                let currFreq = map.get(word) ?? 0
                map.set(word,currFreq+1)
            }
        }
        
        
    }
    
    return equalStringPaired>0 ? result+2 : result
    
    
    
};