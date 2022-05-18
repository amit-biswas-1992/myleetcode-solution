function maxAreaOfIsland(grid: number[][]): number {
    
    let max : number = 0
    
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]==1){
                max = Math.max(max,dfs(grid,i,j));
            }
        }
    }
    
    return max
    
};


function dfs(grid: number[][],i: number,j: number){
    
    if(i<0 || j<0 || i>grid.length-1 || j>grid[0].length-1 || grid[i][j]==0)
        return 0
    
    
    let size = 0;
    grid[i][j] = 0
    
    size += 1 + dfs(grid,i+1,j) + dfs(grid,i-1,j) + dfs(grid,i,j+1) +dfs(grid,i,j-1)
    
    return size
    
}