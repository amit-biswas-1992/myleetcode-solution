function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
    let indegree : number[] = Array(n).fill(0)
    
    for(let edge of edges){
        indegree[edge[1]]++
    }
    
    let result = []
    indegree.forEach ( (degree,node) =>  {
        if(indegree[node]==0) result.push(node) 
    })
                      
    return result
};