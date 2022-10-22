function intToRoman(num: number): string {
    
    let map: Map<number,string> = new Map()
    
    map.set(1,"I")
    map.set(4,'IV')
    map.set(5,'V')
    map.set(9,'IX')
    map.set(10,'X')
    map.set(40,'XL')
    map.set(50,'L')
    map.set(90,'XC')
    map.set(100,'C')
    map.set(400,'CD')
    map.set(500,'D')
    map.set(900,'CM')
    map.set(1000,'M')
    
    let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    
    let result = ""
    for(let value of values){
        if(num>=value){
            let freq: number = Math.floor(num/value)
            num = num % value
            let str = map.get(value)
            result += str.repeat(freq)
   
        }
    }
    
    return result
    

};