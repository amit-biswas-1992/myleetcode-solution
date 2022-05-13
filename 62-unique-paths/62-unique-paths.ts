function uniquePaths(m: number, n: number): number {
    let map = new Map<string,number>()
    return helper(m,n,0,0,map)

};

function helper(m:number, n: number, i: number, j: number,map : Map<string,number>) : number {
    
    //console.log(i,j)
    if(i==m-1 && j==n-1) return 1
    
    if(i>m-1 || j>n-1) return 0
    
    let key = i+","+j
    
    if(map.has(key)) return map.get(key)
    
    let ways = 0;
    
    ways += helper(m,n,i+1,j,map) + helper(m,n,i,j+1,map)
    map.set(key,ways)
    
    return ways
    
    
}