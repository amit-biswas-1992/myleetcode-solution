//note here, backtracking is must because for current array we need to try all combinations with or without elements. if we dont pop on array, the elements will continue to be filled with new elements everytime

function combinationSum(candidates: number[], target: number): number[][] {
    let result:number[][] = []
    helper(candidates,target,0,0,[],result)
    return result
};


function helper(candidates: number[], target: number, index: number, curSum: number,curr: number[],result: number[][]){
    
    if(curSum>target) return
    
    if(curSum==target){
        result.push(Array.from(curr))
        return
    } 
    
    for(let i=index;i<candidates.length;i++){
        curr.push(candidates[i])
        curSum+=candidates[i]
        helper(candidates,target,i,curSum,curr,result)
        curSum-=candidates[i]
        curr.pop()
        
    }
    
    
    
    
}