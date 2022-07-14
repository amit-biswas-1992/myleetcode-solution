function spiralOrder(matrix: number[][]): number[] {

    let m = matrix.length
    let n = matrix[0].length
    
    let result = []
    
    let row = 0
    let col = 0 
    while(m>0 && n>0 ){
        
        if(m==1){
            for(let i=0;i<n;i++){
                result.push(matrix[row][col++])
            }
            break
        }
        
        if(n==1){
            for(let i=0;i<m;i++){
                result.push(matrix[row++][col])
            }
            break
        }
        
        for(let i=0;i<n-1;i++){
            result.push(matrix[row][col++])
        }
        
        for(let i=0;i<m-1;i++){
            result.push(matrix[row++][col])
        }
        
        for(let i=0;i<n-1;i++){
            result.push(matrix[row][col--])
        }
        
        for(let i=0;i<m-1;i++){
            result.push(matrix[row--][col])
        }
        
        m = m - 2 
        n = n - 2
        
        row++
        col++
        
    }
    
    return result
    
};