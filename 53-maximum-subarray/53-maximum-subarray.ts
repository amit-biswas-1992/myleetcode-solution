function maxSubArray(nums: number[]): number {
    
    let max = nums[0]
    
    
    let left = 0
    let currentSum = max
    
    for(let i=1;i<nums.length;i++){
        if(currentSum<0){
            left = i
            currentSum = nums[left]
        }
        else{
            currentSum += nums[i]
        }
        
        max = Math.max(max,currentSum)
    }
    
    return max

};