function countAndSay(n: number): string {

    if(n==1) return "1"
    
    let current = "1"
    
    
    
    for(let i=2;i<=n;i++){
        
        let count = 1
        let temp = ""
        for(let j=0;j<current.length-1;j++){
            
            if(current[j]==current[j+1]) count++
            else{
                temp+= count + "" + current[j]
                count = 1
                
                
            }
            
            
            
        }
        
        if(count==1) temp += "1"+current[current.length-1]
        else{
            temp += count + current[current.length-1]
        }

        
        current = temp
    }
    
    return current
    

};