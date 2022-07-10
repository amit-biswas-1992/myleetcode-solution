function longestPalindrome(s: string): string {
    
    let window = [0,0]
    
    for(let i=0;i<s.length-1;i++){
        
        let pal1 = findPalindrome(s,i,i)
        let pal2 = findPalindrome(s,i,i+1)
        
        let window1 = pal1[1]-pal1[0]
        let window2 = pal2[1]-pal2[0]
        
        let currMaxWindow = window1>=window2 ? pal1 : pal2
        
        if(currMaxWindow[1]-currMaxWindow[0]>window[1]-window[0]){
            window = currMaxWindow
        }
        
    }
    
    
    return s.substring(window[0],window[1]+1)
};

let findPalindrome = (s: string, left: number, right: number) => {
    while(left>= 0 && right <= s.length-1 &&  s[left]==s[right]){
        left--
        right++
    }
    
    return [left+1,right-1]
}

