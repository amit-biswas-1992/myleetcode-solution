function pacificAtlantic(heights: number[][]): number[][] {
    
    
    let result: number[][] = []
    let m = heights.length
    let n = heights[0].length
    
    let visitedPacific: boolean[][] = Array(m).fill(false).map( () => Array(n).fill(false) )
    let visitedAtlantic: boolean[][] = Array(m).fill(false).map( () => Array(n).fill(false) )
    
    for(let i=0;i<m;i++){
        dfs(heights,i,0,visitedPacific,heights[i][0])
        dfs(heights,i,n-1,visitedAtlantic,heights[i][n-1])
        
    }
    
    for(let i=0;i<n;i++){
        dfs(heights,0,i,visitedPacific,heights[0][i])
        dfs(heights,m-1,i,visitedAtlantic,heights[m-1][i])
        
    }
    console.log(visitedPacific,visitedAtlantic)
    
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(visitedPacific[i][j] && visitedAtlantic[i][j]){
                result.push([i,j])
            }
        }
    }
    
    
    return result
};

function dfs(heights: number[][], i: number, j: number, visited: boolean[][],value: number){
    
    if(i<0 || i>=heights.length || j<0 || j>=heights[0].length || visited[i][j] || heights[i][j] < value ) return
    
    visited[i][j] = true
    let current = heights[i][j]
    
    dfs(heights,i+1,j,visited,current)
    dfs(heights,i-1,j,visited,current)
    dfs(heights,i,j+1,visited,current)
    dfs(heights,i,j-1,visited,current)
    
}