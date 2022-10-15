//O(n*m), SC = m+n
function multiply(num1: string, num2: string): string {
    let n = num1.length
    let m = num2.length
    
    if(num1=="0" || num2=="0") return "0"
    
    let result = Array(n+m).fill(0)
    
    for(let i=m-1;i>=0;i--){
        let carry = 0 
        
        for(let j=n-1;j>=0;j--){
            
            result[i+j+1] += carry + Number(num2[i]) * Number(num1[j]) 
            carry = Math.floor(result[i+j+1]/10)
            result[i+j+1] %= 10
            
        }
        
        if(carry>0){
            result[i] = carry
        }
        
    }
    
    let i=0
    
    while(result[i]==0){
        i++
    }
    
    let res = ""
    while(i<n+m){
        res += result[i] 
        i++
    }
    
    return res
    
};