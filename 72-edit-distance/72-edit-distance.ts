function minDistance(word1: string, word2: string): number {
    let map = {}
    return recursive(word1,word2,0,0,map)
};

function recursive(word1: string, word2: string, i: number, j: number,map: any){
    if(i==word1.length) return word2.length-j
    if(j==word2.length) return word1.length-i

    let key = i+","+j
    
    if(map[key]) return map[key]
    
    
    let min = Infinity
    
    if(word1[i]==word2[j]) min = recursive(word1,word2,i+1,j+1,map)
    else{
        min = 1 + Math.min(
            recursive(word1,word2,i,j+1,map), recursive(word1,word2,i+1,j,map), recursive(word1,word2,i+1,j+1,map) 
        )
    }
    
    map[key] = min
    
    return min
}