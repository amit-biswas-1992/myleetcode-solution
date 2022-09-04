function numberOfWays(startPos: number, endPos: number, k: number): number {
    let map = new Map<string,number>()
    return recursive(endPos,k,startPos,0,map)
};

function recursive( endPos: number, k: number, currentPosition: number, currentStep: number, map: Map<string,number>): number{
    let M = 1000000007;
    if(currentStep==k && currentPosition==endPos) return 1
    if(currentStep==k && currentPosition!=endPos) return 0
    
    let ways = 0
    let key = currentPosition+","+currentStep
    if(map.has(key)) return map.get(key)
    
    ways += recursive(endPos,k,currentPosition+1,currentStep+1,map)%M
    ways += recursive(endPos,k,currentPosition-1,currentStep+1,map)%M
    ways = ways%M
    map.set(key,ways)
    
    return ways
}