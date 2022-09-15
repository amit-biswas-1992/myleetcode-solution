function firstMissingPositive(nums: number[]): number {
    let n = nums.length
    
    for(let i=0;i<n;i++){
        if(nums[i]<=0) nums[i] = n + 1
    }
    
    
    
    
    
    for(let i=0;i<n;i++){
        let num = Math.abs(nums[i])
        if(num>0 && num<=n){
            
        
            if(nums[num-1]>0) nums[num-1] = -nums[num-1]
        }
        
    }
    
    
    for(let i=0;i<n;i++){
        if(nums[i]>0) return i+1
    }
    
    return n+1
    
};