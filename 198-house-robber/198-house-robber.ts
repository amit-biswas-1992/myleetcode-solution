function rob(nums: number[]): number {
    let map = new Map()
    return helper(nums,0,map)
};


function helper(nums: number[], index: number, map: Map<number,number>){
    if(index>nums.length-1) return 0

    if(map.has(index)) return map.get(index)
    
    let included = nums[index] + helper(nums,index+2,map)
    let excluded = helper(nums,index+1,map)
    
    let max = Math.max(included,excluded)
    
    map.set(index,max)
    
    return max
}