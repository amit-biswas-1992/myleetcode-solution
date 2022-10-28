//palindrome, reverse string, hashmap for storing index of word and find a string which is complementary of another string to make palindrome combinedly

function palindromePairs(words: string[]): number[][] {
    
    let map = new Map<string,number>()
    let result: number[][] = []
    
    for(let i=0;i<words.length;i++){
        map.set(words[i],i)
    }
    
    if(map.has("")){
        for(let i=0;i<words.length;i++){
            if(palindrome(words[i])){
                let index = map.get("")
                if(index==i) continue
                result.push([i,index],[index,i])
            }
            
            
        }
    }
    
    
    
    for(let i=0;i<words.length;i++){
        let length = words[i].length
        
        
        for(let j=0;j<length;j++){
            let word = words[i].substring(0,j)
            let leftOver = words[i].substring(j)
            
            if(palindrome(word)){
                let reverseString:string = reverse(leftOver)
            
                if(map.has(reverseString)){
                    if(map.get(reverseString)==i) continue
                    result.push([map.get(reverseString),i])
                }
            }
            
            if(palindrome(leftOver)){
                let reverseString:string = reverse(word)
            
                if(map.has(reverseString)){
                    if(map.get(reverseString)==i) continue
                    result.push([i,map.get(reverseString)])
                }
            }
            
            
            
            
        }
        
        
    }
    
    return result
    
    
    
    
    
    
};

function palindrome(word: string){
    let start = 0
    let end = word.length-1
    
    while(start<end){
        if(word[start]!=word[end]) return false
        start++
        end--
    }
    
    return true
}

function reverse(word: string){
    let start = 0
    let end = word.length-1
    let result = word.split("")
    while(start<end){
        let temp = result[start]
        result[start] = result[end]
        result[end] = temp
        start++
        end--
    }
    return result.join("")
}

