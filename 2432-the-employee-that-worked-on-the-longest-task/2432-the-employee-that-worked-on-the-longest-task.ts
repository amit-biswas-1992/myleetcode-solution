function hardestWorker(n: number, logs: number[][]): number {
    
    let id = -1
    let longest = 0
    
    let start = 0
    for(let log of logs){
        let duration = log[1] - start
        start = log[1]
        
        if(duration>longest){
            id = log[0]
            longest = duration
        }
        else if(duration==longest){
            id = Math.min(log[0],id)
        }
    }
    
    return id

};