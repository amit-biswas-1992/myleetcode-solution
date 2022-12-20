function numDistinct(s: string, t: string): number {
    let map = new Map()
    return solve(s,t,0,0,map)
};


function solve(s:string, t:string, i:number, j: number, map: Map<string,number>){
    
    if(i<=s.length && j==t.length) return 1
    if(i>=s.length) return 0
    
    
    
    let key = i + "," + j
    if(map.has(key)) return map.get(key)
    
    let sub = 0
    
    if(s[i]!=t[j]){
        sub += solve(s,t,i+1,j,map)
    }
    else{
        sub += solve(s,t,i+1,j,map) + solve(s,t,i+1,j+1,map)
    }
    
    map.set(key,sub)
    
    return sub
    
    
    
}