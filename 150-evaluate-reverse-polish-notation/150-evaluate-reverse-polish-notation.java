class Solution {
    public int evalRPN(String[] tokens) {
   
    Stack<String> stack = new Stack<String>();
    
    String operators = "+-*/";
    
    
    for(String token : tokens){
        
        stack.push(token);
        
        
        if(operators.contains(token)){
            
            String operator = stack.pop();
            int num2 = Integer.valueOf(stack.pop());
            int num1 = Integer.valueOf(stack.pop());
            
            
            if(operator.equals("+")){
                stack.push(String.valueOf(num1 + num2));
            }
            if(operator.equals("-")){
                stack.push(String.valueOf(num1 - num2));
            }
            if(operator.equals("*")){
                stack.push(String.valueOf(num1 * num2));
            }
            if(operator.equals("/")){
                stack.push(String.valueOf(num1 / num2));
            }
            
        }
    }
    
    return Integer.valueOf(stack.pop());

    }
    
}