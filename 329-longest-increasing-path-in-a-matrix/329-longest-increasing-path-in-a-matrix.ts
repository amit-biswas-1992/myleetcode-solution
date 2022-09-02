//Time: O(m*n), Memory: O(m*n) 
function longestIncreasingPath(matrix: number[][]): number {
    let memoPath : Map<string,number> = new Map() 
    
    let max = 0
    let visited : boolean[][] = Array(matrix.length).fill(false).map( x => Array(matrix[0].length).fill(false))
    
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            let pathLength = dfs(matrix,i,j,-1,visited,memoPath)
            max = Math.max(max,pathLength)
        }
    }
    
    
    return max
};


function dfs(matrix: number[][], i: number, j: number, prev: number,  visited: boolean[][], memoPath : Map<string,number>){
    
    
    
    if(i<0 || j<0 || i==matrix.length  || j==matrix[0].length || matrix[i][j] <= prev || visited[i][j]) return 0
    
    
    let max = 0
    
    let key = i + "," + j
    
    if(memoPath.has(key)) return memoPath.get(key)
    
    visited[i][j] = true
    
    max = Math.max( 
        1 + dfs(matrix,i+1,j,matrix[i][j],visited,memoPath),
        1 + dfs(matrix,i-1,j,matrix[i][j],visited,memoPath),
        1 + dfs(matrix,i,j+1,matrix[i][j],visited,memoPath),
        1 + dfs(matrix,i,j-1,matrix[i][j],visited,memoPath),
    )
    
    memoPath.set(key,max)
    
    visited[i][j] = false
    
    
    return max
}