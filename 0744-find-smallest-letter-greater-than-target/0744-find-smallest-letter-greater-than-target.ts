function nextGreatestLetter(letters: string[], target: string): string {

   let n = letters.length
   
   let start = 0
   let end = n - 1
   
   
   while(start<=end){
       let mid = start + Math.floor((end-start)/2)
       if(target >= letters[mid]){
           start = mid + 1
       }
       else{
           end = mid - 1
       }
   }
    
    return letters[start%n]
    
};