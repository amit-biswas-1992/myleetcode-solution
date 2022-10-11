function letterCombinations(digits: string): string[] {
    
    if(digits.length==0) return []
    
    let map : Map<number,string> = new Map()
    let str = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    
    for(let i=2;i<=9;i++){
        map.set(i,str[i-2])
    }
    
    
    let answer: string[] = []
    recursive(digits,map,0,answer,"")
    
    return answer
    

};

function recursive(digits: string,map: Map<number,string>, index: number, answer: string[], current: string){
    
    if(current.length==digits.length){
        answer.push(current)
    }
    
    if(index==digits.length) return
    
    
    let digit = parseInt(digits[index])
    
    let chars = map.get(digit)
    
    
    for(let char of chars){
        recursive(digits,map,index+1,answer,current+char)
    }
    
    
}