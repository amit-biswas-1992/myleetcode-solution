function jump(nums: number[]): number {
    let dp = Array(nums.length+1).fill(-1)
    return dfs(nums,0,dp)
};

function dfs(nums: number[], index: number, dp: number[]){
    let n = nums.length
    if(index==n-1) return 0
    if(index>=n) return Infinity
    
    if(dp[index]!=-1) return dp[index]
    
    let min = Infinity
    
    for(let i=1;i<=Math.min(n-1-index,nums[index]);i++){
        let temp = 1 + dfs(nums,index+i,dp)
        min = Math.min(min,temp)
    }
    
    return dp[index] = min
}