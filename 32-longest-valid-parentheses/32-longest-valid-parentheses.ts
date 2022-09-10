function longestValidParentheses(s: string): number {
    
    
    let max = 0
    let left = 0
    let right = 0
    
    for(let i=0;i<s.length;i++){
        //if ( push for tracking any valid in future
        if(s[i]=='(') left++
        else right++
        
        
        
        if(left==right){
            max = Math.max(max,left+right)
        }
        
        if(right>left){
            left = 0
            right = 0
        }
        
        
    }
    
    left = 0
    right = 0
    
    for(let i=s.length-1;i>=0;i--){
        //if ( push for tracking any valid in future
        if(s[i]=='(') left++
        else right++
        
        if(left==right){
            max = Math.max(max,left+right)
        }
        
        if(left>right){
            left = 0
            right = 0
        }      
        
    }
    
    return max
};