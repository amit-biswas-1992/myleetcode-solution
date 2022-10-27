function findMaximumXOR(nums: number[]): number {
    
    let mask = 0
    let maxResult = 0
    
    
    for(let i=31;i>=0;i--){
        
        mask = mask | (1 << i)
        //set type is must, otherwise bitwise operation will not work in typescript
        let set = new Set<number>()
        
        for(let num of nums){
            set.add(num & mask)
        }
        
        let check = maxResult | (1 << i)
        
        
        for(let num of [...set]){
            //console.log(num,check)
            let current: number = (check ^ num)
            if(set.has(current)){
                maxResult = check
                break
            }
        }
    }
    
    return maxResult

};