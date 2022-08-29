function garbageCollection(garbage: string[], travel: number[]): number {
    
    let garbageSet : Set<string> = new Set()
    
    let minCost = 0
    
    for(let i=garbage.length-1;i>=0;i--){
        let garbages = garbage[i].split("")
        
        for(let currentGarbage of garbages){
            if(!garbageSet.has(currentGarbage)) garbageSet.add(currentGarbage)
            
        }
        
        let travelCost = (i==0) ? 0 : garbageSet.size * travel[i-1] 
        minCost +=  travelCost + garbages.length
    }
    
    return minCost
    
    

};