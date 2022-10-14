function myPow(x: number, n: number): number {
    if(x==0) return 0
    if(Math.abs(x) == 1){
        if(n%2==0) return 1
        else return x
    }
    
    let result = 1
    for(let i=1;i<=Math.abs(n);i++){
            result *= x
    }
    if(n<0) return 1/result
    else return result

};