function findMin(nums: number[]): number {
    let len = nums.length
    if(len==1) return nums[0]
    
    
    if(nums[0]<nums[len-1]) return nums[0]
    
    let left = 0
    
    let right = len - 1
    
    while(left<right){
        
        let mid = Math.floor(left + (right-left)/2)
                
        if(nums[mid]<nums[mid-1]) return nums[mid]
        
        if(nums[mid]>nums[mid+1]) return nums[mid+1]
        
        if(nums[mid]<nums[0]){
            right = mid
        }
        else{
            left = mid
        }
    }
    
    return nums[0]
};