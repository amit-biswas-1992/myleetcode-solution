//O(TC) = m*n*dfs() = m*n*4^w ,w=word length
//O(SC) = m*n + dfs() = m*n + 4^w 
//pattern: backtracking

function exist(board: string[][], word: string): boolean {
    
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]==word[0] && wordSearch(board,word,0,i,j)){
                return true
            }
        }
    }
    
    return false
};

function wordSearch(board: string[][], word: string, index: number, i: number, j: number){
    if(i<0 || j<0 || i>=board.length || j>=board[0].length || board[i][j]=='#' || board[i][j]!=word[index]) return false
    
    
    if(index == word.length-1 ) return true
    
    let char = board[i][j]
    board[i][j] = '#'
    
    let found = wordSearch(board,word,index+1, i+1,j) || wordSearch(board,word,index+1,i-1,j) || wordSearch(board,word,index+1,i,j+1) || wordSearch(board,word,index+1,i,j-1)
    
    board[i][j] = char
    
    return found

}