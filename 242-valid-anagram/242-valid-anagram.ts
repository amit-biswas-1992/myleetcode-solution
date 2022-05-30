function isAnagram(s: string, t: string): boolean {
    let len = s.length
    
    if(s.length != t.length) return false
    
    let charCountS =  Array(26).fill(0)
    let charCountT =  Array(26).fill(0)
    
    for(let i=0;i<len;i++){
        charCountS[s[i].charCodeAt(0)-97]++
        charCountT[t[i].charCodeAt(0)-97]++
    }
    
    if(charCountS.join(",") !=charCountT.join(",")) return false
    
    return true
    
};