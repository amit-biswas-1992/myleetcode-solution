function maxProduct(nums: number[]): number {

    let max = nums[0]
    let min = nums[0]
    let maxFinal = nums[0]
    for(let i=1;i<nums.length;i++){
        let curMax = max
        max = Math.max(nums[i], max*nums[i], min*nums[i])
        min = Math.min(nums[i], curMax*nums[i], min*nums[i])
        
        maxFinal = Math.max(max,maxFinal)
        
    }
    
    return maxFinal
};