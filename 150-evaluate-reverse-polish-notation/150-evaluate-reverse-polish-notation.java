class Solution {
    public int evalRPN(String[] tokens) {
   
    Stack<String> stack = new Stack<String>();
    
    String operators = "+-*/";
    
    
    for(String token : tokens){
        
        if(!operators.contains(token))
        
            stack.push(token);
        
        
        else{
            
            int num2 = Integer.valueOf(stack.pop());
            int num1 = Integer.valueOf(stack.pop());
            
            
            if(token.equals("+")){
                stack.push(String.valueOf(num1 + num2));
            }
            if(token.equals("-")){
                stack.push(String.valueOf(num1 - num2));
            }
            if(token.equals("*")){
                stack.push(String.valueOf(num1 * num2));
            }
            if(token.equals("/")){
                stack.push(String.valueOf(num1 / num2));
            }
            
        }
    }
    
    return Integer.valueOf(stack.pop());

    }
    
}