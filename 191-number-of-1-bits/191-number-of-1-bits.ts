function hammingWeight(n: number): number {
    let count = 0
    while(n!=0){
        count += (n&1) ? 1 : 0
        
        n >>>= 1
    }
    
    return count
};