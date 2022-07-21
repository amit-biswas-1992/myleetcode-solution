// pattern: suffix and prefix sum
//TC : O(n)
//SC : O(n)

function goodDaysToRobBank(security: number[], time: number): number[] {
    let prefix = Array(security.length).fill(0)
    let suffix = Array(security.length).fill(0)
    
    let result = []
    
    for(let i=1;i<security.length;i++){
        if(security[i-1] < security[i]) prefix[i] = 0
        else
            prefix[i] = prefix[i-1]+1
    }
    
    for(let i=security.length-2;i>=0;i--){
        if(security[i] > security[i+1]) suffix[i] = 0
        else
            suffix[i] = suffix[i+1]+1
    }
        
    
    for(let i=time;i<security.length-time;i++){
        if(prefix[i]>=time && suffix[i]>=time){
            result.push(i)
        }
    }
    
    return result
};