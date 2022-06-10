function maxSubArray(nums: number[]): number {
    
    let max = nums[0]
    
    
    let currentSum = max
    
    for(let i=1;i<nums.length;i++){
        if(currentSum+nums[i]<nums[i]){
            currentSum = nums[i]
        }
        else{
            currentSum += nums[i]
        }
        
        max = Math.max(max,currentSum)
    }
    
    return max

};