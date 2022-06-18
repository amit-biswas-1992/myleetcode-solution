function merge(intervals: number[][]): number[][] {
    
    intervals.sort((a,b) => a[0]-b[0])
    
    let result: number[][] = [intervals[0]]

    
    for(let i=1;i<intervals.length;i++){
        
        let size = result.length
        
        if(result[size-1][1]>=intervals[i][0]){
            result[size-1][0] = Math.min(result[size-1][0],intervals[i][0])
            result[size-1][1] = Math.max(result[size-1][1],intervals[i][1])
            
            
        }
            
        else
            result.push(intervals[i])
    }
    
    
    return result
};