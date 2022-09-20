function firstMissingPositive(nums: number[]): number {
    let set = new Set()
    let n = nums.length
    for(let num of nums) set.add(num)
    
    for(let i=1;i<=n;i++){
        if(!set.has(i)) return i
    }
    
    return n+1
    
};