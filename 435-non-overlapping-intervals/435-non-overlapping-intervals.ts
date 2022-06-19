function eraseOverlapIntervals(intervals: number[][]): number {
    
    intervals.sort((a,b) => a[1]-b[1])
    
    console.log(intervals)
    
    let current = 0    
    let removeCount = 0
    
    for(let i=1;i<intervals.length;i++){
        if(intervals[current][1]>intervals[i][0]){
            removeCount++
        }
        else{
            current = i
        }
    }
    
    return removeCount
};