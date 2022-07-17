function removeInvalidParentheses(s: string): string[] {
    let leftCount = 0
    let rightCount = 0
    
    for(const char of s){
        if(char=='('){
            leftCount++
        }
        else if(char==')'){
            if(leftCount!=0)
                leftCount--
            else 
                rightCount++
        }
        
    }
    
    let validSet = new Set<string>()
    let expression = ""
    
    recursiveRemove(s,0,0,0,leftCount+rightCount,validSet, expression)
    
    return Array.from(validSet)
};

function recursiveRemove(s: string, index: number, left: number, right: number, removeCount : number, validSet: Set<string>, expression : string){
    
    
    if(removeCount<0) return
    
    if(left<right) return
    
    if(index==s.length) {
        if(removeCount == 0 && left == right)
            validSet.add(expression)
        return
        
    }
     recursiveRemove(s,index+1,left,right,removeCount-1,validSet,expression)
    
    
    expression += s[index]
    
    
    
    if(s[index]=='('){
        recursiveRemove(s,index+1,left+1,right,removeCount,validSet,expression)
    }
    else if(s[index]==')'){
        if(right<left)
            recursiveRemove(s,index+1,left,right+1,removeCount,validSet,expression)
    }
    else{
        recursiveRemove(s,index+1,left,right,removeCount,validSet,expression)
    }
    
    //backtracking
    expression = expression.substring(0,expression.length-1)


}   