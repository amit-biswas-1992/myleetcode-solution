function longestNiceSubstring(s: string): string {
    let limit = longestNiceSubRecursive(s,0,s.length-1)
    
    return s.substring(limit[0],limit[1]+1)
};

function longestNiceSubRecursive(s: string, left: number, right: number){
    
    let subArray = s.substring(left,right+1).split("")
    let set = new Set(subArray)
    
    for(let i=left;i<=right;i++){
        if(!set.has(s[i].toLowerCase()) || !set.has(s[i].toUpperCase())){
            let lLimit = longestNiceSubRecursive(s,left,i-1)
            let rLimit = longestNiceSubRecursive(s,i+1,right)
            
            console.log(s[i],lLimit,rLimit)
            
            if(lLimit[1]-lLimit[0]>=rLimit[1]-rLimit[0]) return lLimit
            else return rLimit
            
        }
        
    }
    
    return [left,right]
    
    
    
    
    
}