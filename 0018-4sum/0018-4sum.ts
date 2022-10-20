function fourSum(nums: number[], target: number): number[][] {
    
    let n = nums.length
    
    nums.sort( (a,b) => a-b)
    
    let result: number[][] = []
    
    for(let i=0;i<n-3;i++){
        for(let j=i+1;j<n-2;j++){
            let left = j+1
            let right = n-1
            
            while(left<right){
                let sum = nums[i]+nums[j] + nums[left]+nums[right]
                if(sum>target){
                    right--
                }
                else if(sum<target){
                    left++
                }
                else{
                    result.push([nums[i],nums[j],nums[left],nums[right]])
                    
                    while(left<right && nums[left]==nums[left+1]) left++
                    while(left<right && nums[right]==nums[right-1]) right--
                    
                    left++
                    right--
                }
            }
            
            while(j<n && nums[j]==nums[j+1]) j++
        }
        while(i<n && nums[i]==nums[i+1]) i++
        
    }
    
    return result

};