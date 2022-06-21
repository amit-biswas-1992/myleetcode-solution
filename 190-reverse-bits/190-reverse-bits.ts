function reverseBits(n: number): number {
    let res = ""
	for(let i=0;i<32;i++){
        let bit = n & 1
        
        n = n >> 1
        res += bit 
    }
    
    return parseInt(res,2)
};