function rangeAddQueries(n: number, queries: number[][]): number[][] {
    
    let arr = [...Array(n)].map(x => Array(n).fill(0))
    console.log(arr)
    
    for(let query of queries){
        let [row1,col1,row2,col2] = query
        
        for(let i=row1;i<=row2;i++){
            for(let j=col1;j<=col2;j++){
                arr[i][j]++
            }
        }
        
    }
    
    return arr

};