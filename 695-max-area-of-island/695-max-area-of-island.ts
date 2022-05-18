function maxAreaOfIsland(grid: number[][]): number {
    
    let max : number = 0
    
    let visited: boolean[][] = grid.map( i=> new Array(grid[0].length).fill(false))
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(!visited[i][j] && grid[i][j]==1){
                max = Math.max(max,dfs(grid,i,j,visited));
            }
        }
    }
    
    return max
    
};


function dfs(grid: number[][],i: number,j: number,visited:boolean[][]){
    
    if(i<0 || j<0 || i>grid.length-1 || j>grid[0].length-1 || visited[i][j] || grid[i][j]==0)
        return 0
    
    
    let size = 0;
    visited[i][j] = true
    
    size += 1 + dfs(grid,i+1,j,visited) + dfs(grid,i-1,j,visited) + dfs(grid,i,j+1,visited) +dfs(grid,i,j-1,visited)
    
    return size
    
}