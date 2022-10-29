function isMatch(s: string, p: string): boolean {
    let map: Map<string,boolean> = new Map<string,boolean>()
    return dfs(s,p,0,0,map)
};


function dfs(s: string, p: string, i: number,j: number, map: Map<string,boolean>): boolean{
    
    if(i==s.length && j==p.length) return true
    
    if(i==s.length && allStar(p,j)) return true
    
    
    let key: string = i+","+j
    
    if(map.has(key)) return map.get(key)
    
    let result: boolean = false
    
    
    if(j+1<p.length && p[j+1]=='*'){
        result ||= dfs(s,p,i,j+2,map)
        if(i<s.length && (p[j]=='.' || s[i]==p[j])){
            result ||= dfs(s,p,i+1,j,map)
        }
        
    }
    else if(i<s.length && j<p.length && (p[j]=='.' || s[i]==p[j])){
        result = dfs(s,p,i+1,j+1,map)
    }
   
    map.set(key,result)
    return result
    
    
}

function allStar(p:string, j:number){
    while(j<p.length){
        if(p[j++]!='*') return false
        
    }
    
    return true
}