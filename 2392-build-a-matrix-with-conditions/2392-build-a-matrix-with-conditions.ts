function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
    
    let rowAdj: number[][] = Array(k).fill(null).map( x => [])
    let colAdj: number[][] = Array(k).fill(null).map( x => [])
    let rowdegree : number[] = Array(k).fill(0)
    let coldegree : number[] = Array(k).fill(0)
    
    let result : number[][] = Array(k).fill(0).map(x => Array(k).fill(0))
    
    
    for(let condition of rowConditions){
        rowAdj[condition[0]-1].push(condition[1]-1)
        rowdegree[condition[1]-1]++
    }
    
    for(let condition of colConditions){
        colAdj[condition[0]-1].push(condition[1]-1)
        coldegree[condition[1]-1]++
    }
    
    
    let rowQueue : number[] = []
    let colQueue : number[] = []
    
    for(let i=0;i<rowdegree.length;i++){
        if(rowdegree[i]==0) rowQueue.push(i)
    }
    for(let i=0;i<coldegree.length;i++){
        if(coldegree[i]==0) colQueue.push(i)
    }
    
    
    
    let rows : number[] = []
    let cols : number[] = []
    
    while(rowQueue.length>0){
        let value = rowQueue.shift()
        rows.push(value)
        
        for(let neighbour of rowAdj[value]){
            rowdegree[neighbour]--
            if(rowdegree[neighbour]==0) rowQueue.push(neighbour)
        }
        
    }
    
    while(colQueue.length>0){
        let value = colQueue.shift()
        cols.push(value)
        
        for(let neighbour of colAdj[value]){
            coldegree[neighbour]--
            if(coldegree[neighbour]==0) colQueue.push(neighbour)
        }
        
    }
    
    if(rows.length!=k || cols.length!=k) return []
    
    let colIndexMap  = new Map<number,number>()
    
    for(let i=0;i<cols.length;i++){
        colIndexMap.set(cols[i],i)
    }
    
    for(let i=0;i<rows.length;i++){
        result[i][colIndexMap.get(rows[i])] = rows[i]+1
    }
    
    return result

};