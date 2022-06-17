function numIslands(grid: string[][]): number {
    
    let countIsland = 0
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]=="1"){
                countIsland++
                traverseIsland(grid,i,j)
            }
        }
    }
    
    return countIsland
};

function traverseIsland(grid: string[][], i: number, j: number){
    if(i<0 || j<0 || i>grid.length-1 || j>grid[0].length-1 || grid[i][j]=="0") return
    
    grid[i][j]="0"
    
    traverseIsland(grid,i,j+1)
    traverseIsland(grid,i,j-1)
    traverseIsland(grid,i+1,j)
    traverseIsland(grid,i-1,j)
    
    
    
}