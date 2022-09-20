class Solution {
    public List<Integer> findMinHeightTrees(int n, int[][] edges) {
        //here indegree will not be good idea, because I need to get also the neighbour of indegree size=1, where I can get from a graph with array of node Set to keep neighbour
    //TC = O(n), SC = O(n)
    List<Integer> result = new ArrayList<>();
    if (n == 1){
        result.add(0);
        return result;
            
    }
    //neet to assign type of Set, other wise neighbour of graph[node] will be undefined

    List<Set<Integer>> graph = new ArrayList<>();
    
    for(int i=0;i<n;i++){
        graph.add(new HashSet());
    }
        
        
    
    
    for(int[] edge : edges){
        int u = edge[0];
        int v = edge[1];
            
        graph.get(u).add(v);
        graph.get(v).add(u);
        
    } 
    
    Queue<Integer> queue = new LinkedList<>();
    
    for(int i=0;i<n;i++){
        if(graph.get(i).size()==1) queue.add(i);
    }
    
    while(n>2){
        int size = queue.size();
        
        n -= size;
        
        for(int i=0;i<size;i++){
            int node = queue.poll();
            for(int neighbour : graph.get(node)){
                graph.get(neighbour).remove(node);
                if(graph.get(neighbour).size()==1) queue.add(neighbour);
            }
        }
    }
    
    while(!queue.isEmpty()){
        result.add(queue.poll());
    }
    
    return result;
        
        
        
    }
}