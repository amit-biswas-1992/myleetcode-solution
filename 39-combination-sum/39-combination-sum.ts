//note here, backtracking is must because for current array we need to try all combinations with or without elements. if we dont pop on array, the elements will continue to be filled with new elements everytime

function combinationSum(candidates: number[], target: number): number[][] {
    let result:number[][] = []
    helper(candidates,target,0,0,[],result)
    return result
};


function helper(candidates: number[], target: number, index: number, curSum: number,curr: number[],result: number[][]){
    
    if(curSum>target || index>candidates.length-1) return
    
    if(curSum==target){
        result.push(Array.from(curr))
        return
    } 
    
        curr.push(candidates[index])
        helper(candidates,target,index,curSum+candidates[index],curr,result)
        curr.pop()
        helper(candidates,target,index+1,curSum,curr,result)
        
        
    
    
    
    
    
}