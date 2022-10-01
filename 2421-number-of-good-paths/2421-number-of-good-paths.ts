function numberOfGoodPaths(vals: number[], edges: number[][]): number {
    
    let n = vals.length
    
    let graph: number[][] = Array(n).fill(null).map(x => [])
    for(let [u,v] of edges){
        graph[u].push(v)
        graph[v].push(u)
    }
    
    let valuesMap: Map<number,number[]> = new Map()
    
    for(let i=0;i<vals.length;i++){
        if(!valuesMap.has(vals[i])) valuesMap.set(vals[i],[])
        valuesMap.get(vals[i])?.push(i)
    }
    
    const sortedValuesMap = new Map([...valuesMap].sort((a, b) => a[0] - b[0]));
    
    
    let uf = new DSU(n)
    let result = 0
    
    for(let key of sortedValuesMap.keys()){
        
        
        let countMap = new Map()
        let nodes = sortedValuesMap.get(key) || []
        for(let node of nodes){
            for(let neigh of graph[node]){
                if(vals[neigh]<=vals[node]){

                    uf.union(neigh,node)
                }
            }
        }
        
        for(let node of nodes){
            let par = uf.find(node)
            if(!countMap.has(par)) countMap.set(par,0)
            countMap.set(par,countMap.get(par)+1)
        }
        
        
        for(let [key,freq] of countMap.entries()){
            result += (freq * (freq+1))/2
        }
        
        

        
        
    }
    
    return result
    
};

class DSU{
    n : number
    rank : number[]
    parent: number[]

    constructor(n : number){
        this.n = n
        this.rank = Array(n).fill(0)
        this.parent = Array(n)
        
        for(let i=0;i<n;i++){
            this.parent[i] = i
        }
        
        
    }

    find(x: number): number{
        if(x!=this.parent[x]){
            x = this.find(this.parent[x])
        }
        return x
    }


    union(a: number, b: number) : boolean{
        
        let parA = this.find(a)
        let parB = this.find(b)
        
        if(parA==parB) return false
        
        if(this.rank[parA]==this.rank[parB]){
            this.parent[parB] = parA
            this.rank[parA]++
        }
        else if(this.rank[parA]>this.rank[parB]){
            this.parent[parB] = parA
        }
        else{
            this.parent[parA] = parB
        }
        

        
        return true
        
        
    }
    
}