//O(TC) = m*n*dfs() = m*n*4^w ,w=word length
//O(SC) = m*n + dfs() = m*n + 4^w 

function exist(board: string[][], word: string): boolean {
    let visited = new Array(board.length).fill(false).map( () => new Array(board[0].length).fill(false))
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]==word[0] && wordSearch(board,word,0,i,j,visited)){
                return true
            }
        }
    }
    
    return false
};

function wordSearch(board: string[][], word: string, index: number, i: number, j: number,  visited: boolean[][]){
    if(i<0 || j<0 || i>=board.length || j>=board[0].length || visited[i][j] || board[i][j]!=word[index]) return false
    
    visited[i][j] = true
    
    if(index == word.length-1 ) return true
    
    let found = wordSearch(board,word,index+1, i+1,j,visited) || wordSearch(board,word,index+1,i-1,j,visited) || wordSearch(board,word,index+1,i,j+1,visited) || wordSearch(board,word,index+1,i,j-1,visited)
    
    visited[i][j] = false
    
    return found

}