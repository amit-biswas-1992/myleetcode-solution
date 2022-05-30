function longestPalindrome(s: string): string {
    if(s.length == 0) return ""
    
    let longestPalindrome: string = ""
    
    for(let i=0;i<s.length;i++){
        let palString1 = checkPalindrome(s,i,i);
        let palString2 = checkPalindrome(s,i,i+1)
        
        
        longestPalindrome = longestPalindrome.length < palString1.length ? palString1: longestPalindrome
        longestPalindrome = longestPalindrome.length < palString2.length ? palString2: longestPalindrome
        
        
    }
    
    return longestPalindrome
    
};

function checkPalindrome(s: string, left : number, right: number){
    let palString: string = ""
    
    while(left>=0 && right<s.length && s[left] == s[right]){
        left--
        right++
    }
    
    return s.substring(left+1,right)
    
}



