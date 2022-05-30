function countSubstrings(s: string): number {
    let count = 0
    if( !s.length ) return 0
    
    for(let i=0;i<s.length;i++){
        count += palindomeSubstring(s,i,i)
        count += palindomeSubstring(s,i,i+1)
    }
    
    return count
    
    
    
};

function palindomeSubstring(s: string, left: number, right: number){
    
    let count = 0
    
    while(left>=0 && right<s.length && s[left]==s[right]){
        count++
        left--
        right++
    }
    
    return count
}