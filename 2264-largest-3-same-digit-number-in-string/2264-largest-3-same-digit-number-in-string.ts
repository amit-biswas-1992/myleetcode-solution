function largestGoodInteger(num: string): string {
    
    
    let count = 1
    let max:number = -1
    
    for(let i=0;i<num.length-1;i++){
        if(num[i]==num[i+1]){
            count++
        }
        else{
            count=1
        }
        if(count==3){
            max=Math.max(max,parseInt(num[i]))
        }
    }
    
    
    return (max!=-1)?  (max+"").repeat(3) : ""
    
};