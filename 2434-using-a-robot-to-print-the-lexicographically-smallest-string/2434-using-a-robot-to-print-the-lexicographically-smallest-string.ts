function robotWithString(s: string): string {
    
    let arr: number[] = Array(26).fill(0)
    for(let char of s){
        let index = char.charCodeAt(0)-97
        arr[index]++
        
    }
    
    let ans = ""
    
    let stack = []
    for(let char of s){

        let charCode = char.charCodeAt(0) - 97
        let smallest = smallestChar(arr) 
        
        stack.push(charCode)
        
        arr[charCode]--
     
        
            while(stack.length>0 && stack[stack.length-1]<=smallestChar(arr)){
                //console.log("in",stack[stack.length-1],smallestChar(arr))
                let code = stack.pop()
                ans += String.fromCharCode(97+code)
                
                
            } 

        
    }
    
  
    
    while(stack.length>0){
        ans += String.fromCharCode(stack.pop()+97)
    }
    return ans

};


function smallestChar(arr: number[]): number{
    for(let i=0;i<26;i++) if(arr[i]>0) return i
    
    return -1
}