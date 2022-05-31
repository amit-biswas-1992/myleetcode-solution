function hammingWeight(n: number): number {
    
    let countBit = 0
    
    while(n!=0){
        countBit += n&1
        n = n >>> 1
    }
    
    return countBit
};