function reverseBits(n: number): number {
    let res = 0
	for(let i=0;i<32;i++){
        let bit = n & 1
        
        n = n >>> 1
        res = res << 1
        res |= bit
    }
    
    return res >>> 0
};