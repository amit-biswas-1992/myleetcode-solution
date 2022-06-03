/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let r = matrix.length
    let c = matrix[0].length
    
    let isRowZero = false, isColZero = false
    for(let i=0;i<r;i++){
        if(matrix[i][0]==0){
            isRowZero = true
            break
        }
            
    }

    for(let i=0;i<c;i++){
        if(matrix[0][i]==0){
            isColZero = true
            break
        }
    }
    
    for(let i=1;i<r;i++){
        for(let j=1;j<c;j++){
            
            if(matrix[i][j]==0){
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
            
        }
    }
    
    for(let i=1;i<r;i++){
        for(let j=1;j<c;j++){
            
            if(matrix[i][0]==0 || matrix[0][j] == 0){
                //it will also cover any initial row and column = 0 value but not to the direction of 0 column and 0 row
                matrix[i][j] = 0
                
            }
            
        }
    }

    if(isRowZero){
        for(let i=0;i<r;i++){
            matrix[i][0] = 0
        }
    }

    if(isColZero){
        for(let i=0;i<c;i++){
            matrix[0][i] = 0
        }
    }
    
    

};