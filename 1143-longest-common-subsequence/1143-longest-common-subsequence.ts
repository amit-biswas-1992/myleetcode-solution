function longestCommonSubsequence(text1: string, text2: string): number {
    let map = new Map<string,number>()
    return helper(text1,text2,0,0,map)
};

function helper(text1: string, text2: string, i: number, j: number, map: Map<string,number>){
    
    if(i>=text1.length || j>=text2.length) return 0;
    let key = i+","+j
    
    if(map.has(key)) return map.get(key)
    
    let max = 0
    
    if(text1[i]==text2[j]){
        max += 1 + helper(text1,text2,i+1,j+1,map)
        
        
    } else{
        let exclude1 = helper(text1,text2,i+1,j,map)
        let exclude2 = helper(text1,text2,i,j+1,map)
        max += Math.max(exclude1,exclude2)
    }

    map.set(key,max)
    
    
    return max
    
    
}