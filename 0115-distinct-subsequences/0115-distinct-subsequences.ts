function numDistinct(s: string, t: string): number {
    let dp = Array(s.length+1).fill(null).map( x => Array(t.length+1).fill(0))
    
    for(let i=0;i<s.length;i++){
        dp[i][0] = 1
    }
    
    for(let i=0;i<s.length;i++){
        for(let j=0;j<t.length;j++){
            if(s[i]==t[j]){
                dp[i+1][j+1] = dp[i][j] + dp[i][j+1]
            }
            else{
                dp[i+1][j+1] = dp[i][j+1]
            }
        }
    }
    
    return dp[s.length][t.length]
    
    
};

