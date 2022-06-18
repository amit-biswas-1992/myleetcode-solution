function merge(intervals: number[][]): number[][] {
    
    intervals.sort((a,b) => a[1]-b[1])
    
    let result: number[][] = [intervals[0]]

    
    for(let i=1;i<intervals.length;i++){
        
        let size = result.length
        
        if(result[size-1][1]>=intervals[i][0]){
            result[size-1][0] = Math.min(result[size-1][0],intervals[i][0])
            result[size-1][1] = Math.max(result[size-1][1],intervals[i][1])
            
            let j = size - 1
            while( result.length>1 &&  result[j-1][1]>=result[j][0]){
                
                result[j-1][0] = Math.min(result[j-1][0],result[j][0])
                result[j-1][1] = Math.max(result[j-1][1],result[j][1])
                result.pop()
                
                j--
            }
        }
            
        else
            result.push(intervals[i])
    }
    
    console.log(result)
    
    return result
};