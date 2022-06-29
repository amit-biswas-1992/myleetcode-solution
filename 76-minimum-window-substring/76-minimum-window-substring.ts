//note: frequency could be negative, that means i have more than the character frequency that I need

function minWindow(s: string, t: string): string {
    //initially it will keep the t string's character frequency, then it will be used to find how many characters still needed to match t
    let frequency = new Map()
    
    //count the frequency of all characters in t
    for(let i=0;i<t.length;i++){
        if(!frequency.has(t[i])){
            frequency.set(t[i],0)
        }
        
        frequency.set(t[i],frequency.get(t[i])+1)
    }
    
    
    let windowStart = 0
    let minLength = Infinity
    let startSubstring = 0
    let matchCount = 0
    
    for(let windowEnd=0;windowEnd<s.length;windowEnd++){
        
        let char = s[windowEnd]
        
        //frequency checking and match count checking
        if(frequency.has(char)){
            if(frequency.get(char)>0) matchCount++
            frequency.set(char,frequency.get(char)-1)
        }
        
        
        
        while(matchCount==t.length){
            
            if(minLength>windowEnd-windowStart+1){
                
                minLength = windowEnd-windowStart+1
                startSubstring = windowStart
                
            }
            
            let startChar = s[windowStart]
            
            windowStart++
                
                
            if(frequency.has(startChar)){ 
                    
                //there could be characters more than we need. so decrement match Count when frequency is zero as zero means we find enough characters
                if(frequency.get(startChar)==0) matchCount--
                    
                //increment frequency as this character has been removed from start window position. So not found will be increased
                //will increment only after checking frequency == 0 because we increment before checking, it will never get the value to 0
                frequency.set(startChar,frequency.get(startChar)+1)    
                    
            }
                
            
        }
        
    }
    
    if(minLength==Infinity) return ""
    
    return s.substring(startSubstring,startSubstring+minLength)
    
    
    
};