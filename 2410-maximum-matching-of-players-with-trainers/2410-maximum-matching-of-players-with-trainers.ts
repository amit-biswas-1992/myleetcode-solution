function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    
    players.sort( (a,b) => a-b)
    trainers.sort((a,b) => a-b)
        
    let i=0, j=0
    let matchedCount = 0
    
    while(i<players.length && j<trainers.length){
        while(players[i]>trainers[j]) j++
        
        if(j<trainers.length){
            matchedCount++
            i++
            j++
        }
        
    }
    
    return matchedCount
   
};

