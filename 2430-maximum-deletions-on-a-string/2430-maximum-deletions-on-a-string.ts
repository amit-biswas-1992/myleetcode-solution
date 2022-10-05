function deleteString(s: string): number {
    let map: any = {}
    return recursive(s,0,map)
};

function recursive(s: string,index: number, map: any){
    if(index==s.length) return 0
    
    if(map[index]) return map[index]
    
    let result = 0
    
    for(let i=index;i<s.length;i++){
        let a = s.substring(index,i+1)
        let b = s.substring(i+1,i+1+i+1-index)
        
        if(a==b){
            result = Math.max(result,1+recursive(s,i+1,map))
        }
        
    }
    
    if(result==0) map[index]=1
    else map[index]=result
    
    return map[index]
}