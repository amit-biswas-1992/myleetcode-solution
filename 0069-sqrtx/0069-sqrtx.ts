function mySqrt(x: number): number {
    
    let i=0, j=x
    
    while(i<=j){
        
        let mid = i + Math.floor((j-i)/2)
        
        if(mid*mid<x){
            i=mid+1
        }
        else if(mid*mid>x) j=mid-1
        else return mid
    }
    
    return i-1
    
    
};