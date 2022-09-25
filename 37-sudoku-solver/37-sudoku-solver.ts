/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    solve(board)
    

};

function solve(board: string[][]){
    let n = board.length
    
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(board[i][j]=='.'){
                for(let k=1;k<=n;k++){
                    board[i][j] = k.toString()
                    
                    if(isValid(board,i,j) && solve(board))
                        return true
                    board[i][j] = '.'
                }
                return false
            }
            
            
        }
    }
    
    return true
}

function isValid(board: string[][],i: number,j: number): boolean{
    for(let k=0;k<9;k++){
        if(k!==j && board[i][j]===board[i][k]) return false
        if(k!==i && board[i][j]===board[k][j]) return false
    }
    
    let row = 3*Math.floor(i/3)
    let col = 3*Math.floor(j/3)
    
    for(let k=row;k<row+3;k++){
        for(let l=col;l<col+3;l++){
            if(i!==k && j!=l && board[i][j]===board[k][l]) return false
        }
    }
    
    return true
}