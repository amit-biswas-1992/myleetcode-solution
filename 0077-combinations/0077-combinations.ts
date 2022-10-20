function combine(n: number, k: number): number[][] {
    let result: number[][] = []
    let current: number[] = []
    recursive(n,k,1,current,result)
    
    return result
};


function recursive(n: number, k: number, index: number, current: number[],result: number[][]){
    
    if(current.length==k){
        result.push(Array.from(current))
        return
    }
    
    
    for(let i=index;i<=n;i++){
        current.push(i)
        recursive(n,k,i+1,current,result)
        current.pop()
    }
}
