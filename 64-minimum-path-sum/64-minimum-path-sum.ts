function minPathSum(grid: number[][]): number {
    let map = new Map<string,number>()
    return helper(grid,0,0,map)
};

function helper(grid: number[][], i: number, j: number, map: Map<string,number>){
    
    if(i>grid.length-1 || j>grid[0].length-1) return Infinity
    
    
    if(map.has(i+","+j)) return map.get(i+","+j)
    
    let min = 0
    if(i==grid.length-1 && j==grid[0].length-1){
        return grid[i][j]
    } 
    
    min = grid[i][j] + Math.min(helper(grid,i+1,j,map),helper(grid,i,j+1,map))
    
    map.set(i+","+j,min)
    
    return min
    
    
}