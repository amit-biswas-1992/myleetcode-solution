function permute(nums: number[]): number[][] {
    
    let result = []
    
    subsets(nums,0,[],result)
    
    return result

};

function subsets(nums: number[], index: number, curr: number[],result: number[][]){
    if(index == nums.length){
        result.push(curr)
        return
    }
    
    for(let i=0;i<curr.length+1;i++){
        
       let newPerm = curr.slice(0)
    
       newPerm.splice(i,0,nums[index])
       subsets(nums,index+1,newPerm,result) 
            
    }
    
    
    
}
