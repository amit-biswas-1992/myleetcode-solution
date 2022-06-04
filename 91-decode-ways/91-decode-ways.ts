function numDecodings(s: string): number {
    let map = new Map()
    return helper(s,0,map)
};


function helper(s: string, pos: number,map: Map<number,number>): number{
    
    if(pos>s.length || s[pos] == '0') return 0
    if(pos == s.length) return 1
    

    
    if(map.has(pos)) return map.get(pos)

    let ways1 = helper(s,pos+1,map)  
    
    let ways2 = 0
    
    if(pos+2<=s.length ){
        let val = parseInt(s.substring(pos,pos+2))
        if(val>0 && val<=26) ways2 = helper(s,pos+2,map)
        
    }
    map.set(pos,ways1+ways2)
    
    return ways1 + ways2
}