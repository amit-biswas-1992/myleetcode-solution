function isPalindrome(s: string): boolean {
  s = s.replace(/[^0-9a-zA-Z]/g,'')
    console.log(s)

  let l = 0,r = s.length-1  
  while(l<r){
      
      
      if(s[l].toLowerCase() == s[r].toLowerCase()){
          l++,r--
      }
      else return false
      
  }  
  return true
                
};