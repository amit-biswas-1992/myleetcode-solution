function threeSum(nums: number[]): number[][] {
    let triplets: number[][] = []
    
    nums.sort((a,b) => (a-b))
    
    
    for(let i=0;i<nums.length-2;i++){
        
        if(nums[i]>0) break
        if(i>0 && nums[i]==nums[i-1]) continue
        
        let left = i+1
        let right = nums.length-1
        
        while(left<right){
            let val = nums[i]+nums[left]+nums[right]

            if(val>0){
                right--
            }
            else if(val<0){
                left++
            }
            else{
                let triplet = [nums[i],nums[left],nums[right]]
                
                triplets.push(triplet)
                  
                while(left<nums.length-1 && nums[left]==nums[left+1]) left++
                while(left<right && nums[right]==nums[right-1]) right--
                left++
                right--
                    
                
                
            }
        }
        
    }
    
    return triplets

};