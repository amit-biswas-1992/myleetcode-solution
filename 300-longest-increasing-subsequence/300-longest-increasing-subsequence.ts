function lengthOfLIS(nums: number[]): number {
    let dp = Array(nums.length).fill(0)
    return LIS(nums,-1,0,dp)
};

function LIS(nums: number[],prev: number, index: number, dp: number[]){
    //console.log("prev: " + prev + " index: "+ index)

    if(index==nums.length) return 0
    
    let taken = 0
    if(prev==-1 || (nums[index]>nums[prev])){
        if(dp[index]==0)
            dp[index] = 1 + LIS(nums,index,index+1,dp)
        
    } 
    taken = dp[index]
    
    
    let notTaken = LIS(nums,prev,index+1,dp)
    
    
    return Math.max(notTaken,taken)
    
}