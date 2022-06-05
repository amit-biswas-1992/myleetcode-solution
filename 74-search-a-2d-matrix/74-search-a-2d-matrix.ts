function searchMatrix(matrix: number[][], target: number): boolean {
    let r = matrix.length
    let c = matrix[0].length
    
    let size = r*c
    
    let first= 0, last = size-1 
    
    while(first<=last){
        let mid = Math.ceil(first + (last-first)/2)
        
        let row:number = Math.floor(mid/c)
        let col:number = mid%c
        
        
        if(matrix[row][col]==target)return true
        else if(matrix[row][col]>target){
            last = mid-1
        }
        else{
            first = mid+1
        }
    }
    
    
    return false
    
};