function countBits(n: number): number[] {
    let result = []
    
    for(let i=0;i<=n;i++){
        result.push(countBit(i))
    }
    
    return result
};

function countBit(n : number){
    let count = 0
    
    while(n != 0){
        n = n & (n-1)
        count++
    }
    return count
}