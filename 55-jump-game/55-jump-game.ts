function canJump(nums: number[]): boolean {
    let map = new Set<number>()
    return helper(nums,0,map)
};


function helper(nums: number[], step: number, set: Set<number>) : boolean {
    //return if step equal to destination final index
    if(step == nums.length-1){
        return true
    } 
    
    //return if step becomes higher than destination
    if(step>nums.length-1) return false
    
    //same step has been processed again, that means it is false. If true, then it would not have been processed multiple times.
    if(set.has(step)) return false
    
    set.add(step)
    
    let res = false
    
    // step = maximum step we can take. so we need to check all possible step from 1 to current step value
    for(let i=1;i<=nums[step];i++){
        res = res || helper(nums,step+i,set)
       
    }
    
    return res;
}