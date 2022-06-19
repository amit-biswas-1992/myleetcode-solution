function eraseOverlapIntervals(intervals: number[][]): number {
    
    intervals.sort((a,b) => a[1]-b[1])
    
    
    let current = 0    
    let removeCount = 0
    
    for(let i=1;i<intervals.length;i++){
        if(intervals[current][1]>intervals[i][0]){
            removeCount++
        }
        else{
            //new value accepted
            //so next time, we will check start time for current interval end time. so update with current index. it is basically last accepted Index
            current = i
        }
    }
    
    return removeCount
};