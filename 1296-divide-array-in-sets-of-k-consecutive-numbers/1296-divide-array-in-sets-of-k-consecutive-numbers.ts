function isPossibleDivide(nums: number[], k: number): boolean {
    let map = {}
    
    let group = nums.length % k
    
    if(group!=0) return false
    
    nums.sort((a,b)=>a-b)
    
    for(let num of nums){
        if(map[num]) map[num]++
        else map[num]=1
    }
    
    
    for(let i=0;i<nums.length;i++){
        if(map[nums[i]]==0) continue
        
        for(let j=nums[i];j<nums[i]+k;j++){
            if(map[j] && map[j]>0) map[j]--
            else return false
        }
    }
    

    return true 
};