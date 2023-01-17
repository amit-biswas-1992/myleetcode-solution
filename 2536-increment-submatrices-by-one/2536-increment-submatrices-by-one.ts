function rangeAddQueries(n: number, queries: number[][]): number[][] {
    
    let arr = [...Array(n)].map(x => Array(n).fill(0))
    console.log(arr)
    
    for(let query of queries){
        let [row1,col1,row2,col2] = query
        
        for(let i=row1;i<=row2;i++){
            arr[i][col1]++
            if(col2+1<n) arr[i][col2+1]--
            
            
        }
        
    }
    
    for(let i=0;i<n;i++){
        for(let j=1;j<n;j++){
            arr[i][j] += arr[i][j-1]
        }
    }
    
    return arr

};