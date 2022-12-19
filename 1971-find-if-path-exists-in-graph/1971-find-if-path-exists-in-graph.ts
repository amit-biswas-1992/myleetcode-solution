function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    let graph: number[][] = [...Array(n)].map(x => [])
    let dis = Array(n).fill(-1)
    let visited = Array(n).fill(false)
    
    
    for(let [u,v] of edges){
        graph[u].push(v)
        graph[v].push(u)
    }
    
    dis[source] = 0
    visited[source] = true
    
    getDistance(graph,dis,source,visited,0)
    
    
    return dis[destination] != -1
};


function getDistance(graph: number[][], dis: number[], node: number, visited: boolean[], level: number){
    for(let neigh of graph[node]){
        if(!visited[neigh]){
            visited[neigh] = true
            dis[neigh] = 1 + level
            getDistance(graph,dis,neigh,visited,1+level)
        }
    }
}