function partitionArray(nums: number[], k: number): number {
    nums.sort((a,b)=>(a-b))
    
    let count = 1

    let last = 0
    
    for(let i=1;i<nums.length;i++){
        
        if(nums[i]-nums[last]<=k)
            continue
        else{
            count++
            last = i
            
            
        }
    }
    
    return count
};