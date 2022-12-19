function findItinerary(tickets: string[][]): string[] {
    
    let map = new Map()
    
    for(let ticket of tickets){
        let [from,to]  = ticket
        
        if(!map.has(from)){
            map.set(from,[])
        }
        map.get(from).push(to)
    }
    
    
    let sortedMap = new Map([...map.entries()].map( ([key,value]) => [key,value.sort()]))
    
    
    
    let result: string[] = []
    dfs(sortedMap,'JFK',result)
    
    return result.reverse()

};


function dfs(sortedMap: Map<string,string[]>,source: string, result: string[]){
    
    while(sortedMap.has(source) && sortedMap.get(source).length>0){
        let destination = sortedMap.get(source).shift()
        dfs(sortedMap,destination,result)
    }
    
    result.push(source)
    
}