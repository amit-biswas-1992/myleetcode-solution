function minimumCardPickup(cards: number[]): number {
    
    let windowStart = 0
    let map: Map<number,number> = new Map()
    
    let minWindow = Infinity
    
    for(let windowEnd=0;windowEnd<cards.length;windowEnd++){
        let card = cards[windowEnd]
        if(!map.has(card))
            map.set(card,0)
        
        if(map.get(card)==1){
            minWindow = Math.min(minWindow,windowEnd-windowStart+1)
            while(cards[windowStart]!=card){
                map.set(cards[windowStart],0)
                windowStart++
                minWindow = Math.min(minWindow,windowEnd-windowStart+1)
            }
                
            windowStart++
        }
        else{
            map.set(card,1)
        }
        
        
        
    }
    
    if(minWindow==Infinity)  return -1
    
    return minWindow

};