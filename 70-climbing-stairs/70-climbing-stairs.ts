function climbStairs(n: number): number {
    let map = new Map()
    return helper(n,map)
};


let helper = (n: number, map : Map<number,number>) => {
    
    if(n==0) return 1
    if(n<0) return 0
    
    if(map.has(n)) return map.get(n)
    
    let way1 = helper(n-1,map)
    let way2 = helper(n-2,map)
    
    map.set(n,way1+way2)
    
    return way1+way2
    
    
}