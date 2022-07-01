function permute(nums: number[]): number[][] {
    
    let result = []
    
    let set = new Set<number>()
    
    backtrack(nums,set,[],result)
    
    return result

};

function backtrack(nums: number[], set: Set<number>, curr: number[],result: number[][]){
    if(curr.length == nums.length){
        result.push(Array.from(curr))
        return
    }
    
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])) continue
    
        curr.push(nums[i])
        
        set.add(nums[i])
        
        backtrack(nums,set,curr,result) 
        curr.pop()
        set.delete(nums[i])
        
            
    }
    
    
    
}
