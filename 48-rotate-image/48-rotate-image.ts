/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {

    let t = 0
    let b = matrix.length - 1
    let l = 0
    let r = matrix.length - 1
    
    
    while(t<b){
        
        for(let i=0;i<r-l;i++){
            
            let topLeft = matrix[t][l+i]
        
            matrix[t][l+i] = matrix[b-i][l]
            matrix[b-i][l] = matrix[b][r-i]
            matrix[b][r-i] = matrix[t+i][r]
            matrix[t+i][r] = topLeft

            
        }
        
        
        
        t++,b--,l++,r--
        
        
        
    }
};