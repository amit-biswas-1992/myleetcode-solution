function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length-1
    
    let smallIndex = -1
    
    while(left<right){
        let mid = left + Math.floor((right-left)/2)
        if(nums[mid]>nums[mid+1]) {
            smallIndex = mid+1
            break
        } 
        if(nums[mid]<nums[mid-1]){
            smallIndex =  mid
            break
        } 
        
        if(nums[right]<nums[mid]){
            left = mid+1
        }
        else{
            right = mid-1
        }
    }
    
    //if so small Index found, then left is smallest index
    if(left>=right)
        smallIndex = left
    
    
    //finding sorted window for target
    //if target is bigger than right most index, then if falls on rotated part on left of small Index. 0 to smallIndex-1
    if(nums[nums.length-1]<target){
        left = 0
        right = smallIndex - 1
    
    }
    else{
        left = smallIndex
        right = nums.length-1
    }
    
    
    while(left<right){
        let mid = left + Math.floor((right-left)/2)
        
        if(nums[mid]==target) return mid
        
        if(nums[mid]>target){
            right = mid-1
            
        }
        else{
            left = mid+1
        }
    }
    
    if(nums[left]==target) return left
    
    return -1
};