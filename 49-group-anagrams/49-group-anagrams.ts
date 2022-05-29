/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map: Map<string, string[]> = new Map()
    
    for(const str of strs){
        let ca = Array(26).fill(0)
        
        for(let i=0;i<str.length;i++){
            ca[str[i].charCodeAt(0)-97]++
            
        }
        
        
        let countStr = ca.join()
        
        
        if(map.has(countStr)){
            map.get(countStr).push(str)
        }
        else{
            map.set(countStr,[str])
        }
        
        
    }
    
    return Array.from(map.values())
};