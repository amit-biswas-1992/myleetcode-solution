function deleteString(s: string): number {
    let map: Map<number,number> = new Map()
    return recursive(s,0,map)
};

function recursive(s: string,index: number, map: Map<number,number>){
    if(index==s.length) return 0
    
    if(map.has(index)) return map.get(index)
    
    let result = 0
    for(let i=index;i<s.length;i++){
        let a = s.substring(index,i+1)
        let b = s.substring(i+1,i+1+i+1-index)
        
        if(a==b){
            result = Math.max(result,1+recursive(s,i+1,map))
        }
        
    }
    
    if(result==0) map.set(index,1)
    else map.set(index,result)
    
    return map.get(index)
}