function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    
    let map = new Map()
    
    return dfs(obstacleGrid,0,0,map)

};

function dfs(grid: number[][],i: number,j: number, map: Map<string,number>){
    
    if(i<0 || j<0 || i==grid.length || j==grid[0].length || grid[i][j]==1) return 0
    
    if(i==grid.length-1 && j==grid[0].length-1) return 1
    
    let count = 0
    
    let key = i+","+j
    
    if(map.has(key))  return map.get(key)
    
    count += dfs(grid,i+1,j,map) + dfs(grid,i,j+1,map)
    
    map.set(key,count)
    
    return count
    
    
    
}