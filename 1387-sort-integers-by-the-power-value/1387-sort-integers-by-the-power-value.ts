function getKth(lo: number, hi: number, k: number): number {
    let powers = []
    let powerMap = new Map<number,number>()
    
    for(let i=lo;i<=hi;i++){
        let steps = findPowerVal(i,powerMap)
        powers.push([i,steps])
        
    }
    
    powers = powers.sort((a,b) => a[1]-b[1])
    
    
    return powers[k-1][0]
};


function findPowerVal(x: number, map: Map<number,number>){
    
    if(x == 1) return 0
    
    if(map.has(x)) return map.get(x)
    
    let steps = 0
    
    if(x%2==1){
        steps = findPowerVal(3*x+1,map) + 1
    }
    else{
        steps = findPowerVal(Math.floor(x/2),map) + 1
    }
        
    map.set(x,steps)
   
    return steps
}