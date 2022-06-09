function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    let graph : number[][] = [...Array(numCourses)].map(() => new Array())
    let indegree: number[] = Array(numCourses).fill(0)
    let stack: number[] = []
    let courseTaken = 0
    
    //calculate indegree and adjacency matrix
    for(let prerequisite of prerequisites){
        indegree[prerequisite[0]]++
        graph[prerequisite[1]].push(prerequisite[0])
    }
    
    //push indegree to stack
    for(let i=0;i<indegree.length;i++){
        if(indegree[i]==0) stack.push(i)
    }
    
    //get indegree 0 one by one and decrease indegree for all the neighbors
    while(stack.length>0){
        let course = stack.pop()
        
        //course has been taken successfully for this current course
        courseTaken++
        
        for(let i=0;i<graph[course].length;i++){
            let neighbour = graph[course][i]
            indegree[neighbour]--
            if(indegree[neighbour]==0)stack.push(neighbour)
        }
        
    }
    
    //if possible courses taken equal to total courses return true
    return courseTaken == numCourses
    
};