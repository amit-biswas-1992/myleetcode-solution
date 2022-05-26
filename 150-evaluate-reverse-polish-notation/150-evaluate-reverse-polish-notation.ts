function evalRPN(tokens: string[]): number {
    
    let stack: string[] = []
    
    let operator = ["+","-","*","/"]
    
    
    for(let token of tokens){
        stack.push(token)
        
        
        if(operator.includes(token)){
            let operator = stack.pop()
            let num2 = parseInt(stack.pop())
            let num1 = parseInt(stack.pop())
            
            
            if(operator == '+'){
                stack.push((num1 + num2).toString())
            }
            if(operator == '-'){
                stack.push((num1 - num2).toString())
            }
            if(operator == '*'){
                stack.push((num1 * num2).toString())
            }
            if(operator == '/'){
                stack.push((num1 / num2).toString())
            }
        }
    }
    
    return parseInt(stack.pop())

    
    
};