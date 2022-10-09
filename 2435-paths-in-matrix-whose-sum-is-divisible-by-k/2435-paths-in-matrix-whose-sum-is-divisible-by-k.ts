//TC=O(m*n*k) SC=O(*n*k)
//it should be k, not all random sum, other wise it will throw out of memory error
//(5+7) % 6 ==0 and (5+7%6) %6 = (5+1)%6 = 0 same thing, so no need to have key unilimited, only k is fine. 


function numberOfPaths(grid: number[][], k: number): number {
    let m = grid.length, n = grid[0].length
    let memo = Array(m).fill(0).map(() => Array(n).fill(0).map(() => Array(k).fill(-1)));
    return dfs(grid,k,0,0,0,memo)

};

function dfs(grid: number[][], k: number, i: number, j: number, curSum: number, memo: number[][][]){
    
    let mod = 1000000007
    
    if(i==grid.length || j==grid[0].length) return 0
    if(i==grid.length-1 && j==grid[0].length-1){
        if((curSum+grid[i][j])%k==0) return 1
    
    }
    
    if(memo[i][j][curSum]!=-1) return memo[i][j][curSum]
    
    let path = dfs(grid,k,i+1,j,(curSum+grid[i][j])%k,memo) + dfs(grid,k,i,j+1,(curSum+grid[i][j])%k,memo)
    
    memo[i][j][curSum]=path%mod
    
    return memo[i][j][curSum]
    
}