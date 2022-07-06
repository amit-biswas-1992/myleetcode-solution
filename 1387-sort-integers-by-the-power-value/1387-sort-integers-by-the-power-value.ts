function getKth(lo: number, hi: number, k: number): number {
    let powerMap = new Map<number,number>()
    
    for(let i=lo;i<=hi;i++){
        let steps = stepsToTranfromOne(i)
        powerMap.set(i,steps)
        
    }
    
    let powers = [...powerMap.entries()].sort((a,b) => a[1]-b[1])
    
    
    return powers[k-1][0]
};


function stepsToTranfromOne(x: number){
    let steps = 0
    while(x!=1){
        if(x%2==1){
            x = 3*x + 1
        }
        else{
            x = Math.floor(x / 2)
        }
        steps++
    }
    
    return steps
}