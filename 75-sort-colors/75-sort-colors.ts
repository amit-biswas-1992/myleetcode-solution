/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    
    let left = 0
    let right = nums.length -1
    
    let i=0
    
    while(i<=right){
        
        if(nums[i]==0){
            nums[i]=nums[left]
            nums[left]=0
            left++
            i++
            
        }
        else if(nums[i]==2){
            nums[i]=nums[right]
            nums[right]=2
            right--
            
        }
        else{i++}
    }
};