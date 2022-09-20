function findMinHeightTrees(n: number, edges: number[][]): number[] {
    
    //here indegree will not be good idea, because I need to get also the neighbour of indegree size=1, where I can get from a graph with array of node Set to keep neighbour
    //TC = O(n), SC = O(n)
    if (n === 1) return [0];
    //neet to assign type of Set, other wise neighbour of graph[node] will be undefined

    let graph = Array(n).fill(null).map( x => new Set<number>())
    
    
    for(let edge of edges){
        let [u,v] = edge
        
        graph[u].add(v)
        graph[v].add(u)
        
    } 
    
    let queue: number[] = []
    
    for(let i=0;i<n;i++){
        if(graph[i].size==1) queue.push(i)
    }
    
    while(n>2){
        let size = queue.length
        
        n -= size
        
        for(let i=0;i<size;i++){
            let node = queue.shift() ?? 0
            for(let neighbour of graph[node]){
                graph[neighbour].delete(node)
                if(graph[neighbour].size==1) queue.push(neighbour)
            }
        }
    }
    
    return queue
    
};