function longestValidParentheses(s: string): number {
    let stack: number[] = []
    stack.push(-1)
    
    let max = 0
    
    for(let i=0;i<s.length;i++){
        //if ( push for tracking any valid in future
        if(s[i]=='(') stack.push(i)
        
        else{
            stack.pop()
            
            if(stack.length>0){
                let length = i-stack[stack.length-1]
                max = Math.max(max, length)
            }
            else{
                stack.push(i)
            }
            
            
        }
        
        
    }
    
    return max
};