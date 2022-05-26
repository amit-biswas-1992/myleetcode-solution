function longestConsecutive(nums: number[]): number {
    if(nums.length==0) return 0
    
    const set = new Set();
    let max = 1
    
    for(let num of nums){
        set.add(num)
    }
    
    for(let num of nums){
        let count = 1
        
        let left = num - 1
        let right = num + 1
        
        while(set.has(left)){
            count++
            set.delete(left)
            left--        
        }
        
        while(set.has(right)){
            count++
            set.delete(right)
            right++        
        }
        
        max = Math.max(max,count)
        
    }
    
    return max
    
};