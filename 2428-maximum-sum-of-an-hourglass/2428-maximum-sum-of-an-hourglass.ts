function maxSum(grid: number[][]): number {
    let r = grid.length
    let c = grid[0].length
    
    let max = 0
    
    for(let i=1;i<r-1;i++){
        for(let j=1;j<c-1;j++){
            let sum = 0
            for(let k=j-1;k<=j+1;k++) sum+=grid[i-1][k]
            sum+=grid[i][j]
            for(let k=j-1;k<=j+1;k++) sum+=grid[i+1][k]
            
            max = Math.max(sum,max)
            
            
        }
    }
    
    return max

};