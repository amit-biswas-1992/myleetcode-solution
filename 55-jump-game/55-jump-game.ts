function canJump(nums: number[]): boolean {
    let map = new Set<number>()
    return helper(nums,0,map)
};


function helper(nums: number[], step: number, set: Set<number>) : boolean {
    
    if(step == nums.length-1){
        return true
    } 
    
    if(step>nums.length-1) return false
    
    if(set.has(step)) return false
    
    set.add(step)
    
    let res = false
    
    for(let i=1;i<=nums[step];i++){
        res = res || helper(nums,step+i,set)
       
    }
    
    return res;
}