function generateParenthesis(n: number): string[] {
    
    let result : string[] = []
    
    
    generate(n,0,0,"",result)
    
    return result
    
};


function generate(n: number,leftCount: number,rightCount: number,currString: string,result: string[]): void{
    
    if(leftCount<rightCount) return
    
    if(currString.length == 2*n){
        result.push(currString)
    }
    

    if(leftCount<n) generate(n,leftCount+1,rightCount,currString+"(",result)
    if(rightCount<leftCount) generate(n,leftCount,rightCount+1,currString+")",result)

    return
    
}