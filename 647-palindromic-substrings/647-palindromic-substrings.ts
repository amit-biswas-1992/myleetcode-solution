function countSubstrings(s: string): number {
    let count = 0;
    
    for(let i=0;i<s.length;i++){
        count+=countPalindrome(s,i,i)
        count+=countPalindrome(s,i,i+1)
    }
    
    return count
};


function countPalindrome(s:string,left:number,right:number){
    let count = 0
    
    while(left>=0 || right<s.length){
        if(s[left]==s[right]){
            left--
            right++
            count++
        }
        else{
            break
        }
    }
    
    return count
}