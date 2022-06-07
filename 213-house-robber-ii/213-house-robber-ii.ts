function rob(nums: number[]): number {
    //what if the length is 1
    if(nums.length == 1) return nums[0]
    
    
    let map = new Map()
    let map2 = new Map()
    return Math.max(helper(nums,1,nums.length-1,map),helper(nums,0,nums.length-2,map2))
};


function helper(nums: number[], index: number,lastIndex: number, map: Map<number,number>){
    if(index>lastIndex) return 0

    if(map.has(index)) return map.get(index)
    
    let included = nums[index] + helper(nums,index+2,lastIndex,map)
    let excluded = helper(nums,index+1,lastIndex,map)
    
    let max = Math.max(included,excluded)
    
    map.set(index,max)
    
    return max
}