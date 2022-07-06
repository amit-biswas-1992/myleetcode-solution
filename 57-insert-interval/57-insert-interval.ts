function insert(intervals: number[][], newInterval: number[]): number[][] {
    let result = []
    
    let i = 0
    
    //insert all interval in the result which ends before starting the new interval
    while(i<intervals.length && intervals[i][1]<newInterval[0]){
        result.push(intervals[i])
        i++
    }
    
    //merge overlap interval
    let merged = newInterval
    while(i<intervals.length && intervals[i][0] <= merged[1]){
        let start = Math.min(intervals[i][0],merged[0])
        let end = Math.max(intervals[i][1],merged[1])
        merged = [start,end]
        i++
    }
    
    result.push(merged)
    
    //insert rest interval
    while(i<intervals.length){
        result.push(intervals[i])
        i++
    }
    
    return result
};