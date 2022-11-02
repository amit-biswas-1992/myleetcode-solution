function nextGreatestLetter(letters: string[], target: string): string {

    let arr = Array(26).fill(0)
    
    
    for(let ch of letters){
        arr[ch.charCodeAt(0)-97]++
    }
    
    
    for(let i=target.charCodeAt(0)-97+1;i<26;i++){
        if(arr[i]>0) return String.fromCharCode(i+97)
    }
    
    return letters[0]
    
    
};