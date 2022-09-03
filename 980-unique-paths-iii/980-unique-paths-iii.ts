//Approach: Backtracking using Recursive Approach
//Time Complexity: O(4 ^ (m * n)) (m and n represents number of rows and column)
//Space Complexity: O(m * n) (maximum recusive calls possible)

function uniquePathsIII(grid: number[][]): number {
    
    let emptySquare = 0
    let startX, startY
    
    grid.forEach( (row,i) => row.forEach( (value,j) => {
        if(value==0) emptySquare++
        else if(value==1){
            startX = i
            startY = j
        }
        
    } ))
    
    
    return dfs(grid,startX,startY,emptySquare+1)
    
 
};


function dfs(grid: number[][], i: number,j: number, empty: number) : number {
    if(i<0 || j<0 || i==grid.length || j==grid[0].length || grid[i][j]==-1 || grid[i][j]==10) return 0
    
    //console.log(empty,grid[i][j])
    if(empty==0 && grid[i][j]==2) return 1
    if(grid[i][j]==2) return 0
    
    let directions = [[1,0],[-1,0],[0,1],[0,-1]]
    let walk = 0
    let gridValue = grid[i][j]
    
    
    
    grid[i][j] = 10
    for(let direction of directions){
        walk += dfs(grid,i+direction[0],j+direction[1],empty-1)
    }
    grid[i][j] = gridValue
    
    return walk
}