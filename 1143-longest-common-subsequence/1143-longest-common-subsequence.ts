//OC = o(m*n) , m = len1, n = len2
//for any i,j => value could be re-calculated. so we need to store i,j either on dp[i][j] or on map
//(0,0) => (1,1) by matching or (0,1) / (1,0) => (1,1) by skipping. so overlapping subproblem
//i=11,j=2 so key=112 is confusing, it would either be formed by 11,2 or 1,12. so in between i and j, we need to put splitter like comma(,)
function longestCommonSubsequence(text1: string, text2: string): number {
    let map = new Map()
    return lcs(text1,text2,0,0,map)
};

function lcs(text1: string,text2: string, index1: number, index2: number, map: Map<string,number>){
    if(index1==text1.length || index2==text2.length) return 0
    
    let key = index1+","+index2
    if(map.has(key)) return map.get(key)
    
    let maxLen = 0
    if(text1[index1]==text2[index2]){
        maxLen = 1 + lcs(text1,text2,index1+1,index2+1,map)
    }
    else{
        maxLen = Math.max(lcs(text1,text2,index1+1,index2,map),lcs(text1,text2,index1,index2+1,map))
    }
    
    map.set(key,maxLen)
    
    return maxLen
    
}