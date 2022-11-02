function searchRange(nums: number[], target: number): number[] {
    
    
    let left = binarySearch(nums,target,false)
    
    if(left!=-1){
        let right = binarySearch(nums,target,true)
        return [left,right]
    }
    
    return [-1,-1]
    
    
};

function binarySearch(nums: number[], target: number, isFindMax: boolean): number{
    let keyIndex = -1
    let n = nums.length
    
    let start = 0
    let end = n - 1
    
    while(start<=end){
        let mid = start + Math.floor( (end-start)/2 )
        
        if(target > nums[mid]){
            start = mid + 1
        }
        else if(target < nums[mid]){
            end = mid - 1
        }
        else{
            keyIndex = mid
            if(isFindMax==true){
                start = mid + 1
            }
            else{
                end = mid - 1
            }
        }
    }
    
    return keyIndex
    
    
    
}