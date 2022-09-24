let total = 0
function numberOfWays(s: string): number {
    
    let left = Array(s.length).fill(0)
    let right = Array(s.length).fill(0)
    let oneCount = 0
    let zeroCount = 0
    
    
    
    let i = 0
    
    for(let char of s){
        if(char=='0'){
            zeroCount++
            left[i++] = oneCount
        }
        else{
            oneCount++
            left[i++] = zeroCount
        }
    }
    
    oneCount = 0, zeroCount = 0
    
    for(let i=s.length-1;i>=0;i--){
        if(s[i]=='0'){
            zeroCount++
            right[i] = oneCount
        }
        else{
            oneCount++
            right[i] = zeroCount
        }
    }
    
    let result = 0
    
    for(let i=0;i<s.length;i++){
        result += left[i]*right[i]
    }
    
    return result
    
    
    
    
    
};

