function findTheDifference(s: string, t: string): string {

    let value = 0
    
    for(let ch of s){
        value ^= (ch.charCodeAt(0))
    }
    
    for(let ch of t){
        value ^= (ch.charCodeAt(0))
    }
    
    return String.fromCharCode(value)
};