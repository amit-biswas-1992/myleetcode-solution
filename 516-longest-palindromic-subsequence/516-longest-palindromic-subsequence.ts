function longestPalindromeSubseq(s: string): number {
    let map = new Map()
    return lps(s,0,s.length-1,map)
};

function lps(s: string, left: number, right: number, map: Map<string,number>): number{
    if(left>right) return 0
    if(left==right) return 1
    
    let key = left + "," + right
    
    if(map.has(key)) return map.get(key)
    
    let maxLen = 0
    
    if(s[left]==s[right]){
        maxLen = 2 + lps(s,left+1,right-1,map)
    }
    else{
        maxLen = Math.max(lps(s,left+1,right,map),lps(s,left,right-1,map))
    }
    
    map.set(key,maxLen)
    
    return maxLen
}